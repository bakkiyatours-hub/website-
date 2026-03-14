const REVEALED_CLASS = 'bk-revealed';

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

function setStaggerIndexes(root: ParentNode) {
  const containers = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal-stagger]'));
  for (const container of containers) {
    let children: HTMLElement[] = [];
    try {
      children = Array.from(container.querySelectorAll<HTMLElement>(':scope > [data-reveal]'));
    } catch {
      children = Array.from(container.querySelectorAll<HTMLElement>('[data-reveal]'));
    }

    children.forEach((child, index) => {
      child.style.setProperty('--reveal-index', String(index));
    });
  }
}

export function initScrollReveal(root: ParentNode = document) {
  if (typeof window === 'undefined') return () => {};

  if (prefersReducedMotion()) {
    const all = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    all.forEach((el) => el.classList.add(REVEALED_CLASS));
    return () => {};
  }

  setStaggerIndexes(root);

  const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (elements.length === 0) return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add(REVEALED_CLASS);
        observer.unobserve(el);
      }
    },
    { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
  );

  elements.forEach((el) => {
    if (el.classList.contains(REVEALED_CLASS)) return;
    observer.observe(el);
  });

  return () => observer.disconnect();
}

