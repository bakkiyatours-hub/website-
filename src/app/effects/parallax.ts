function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

export function initParallax(root: ParentNode = document) {
  if (typeof window === 'undefined') return () => {};
  if (prefersReducedMotion()) return () => {};

  const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (elements.length === 0) return () => {};

  let rafId = 0;
  const strengthByEl = new Map<HTMLElement, number>();
  const active = new Set<HTMLElement>();

  elements.forEach((el) => {
    const strength = Number(el.dataset.parallax ?? '0.12');
    strengthByEl.set(el, Number.isFinite(strength) ? strength : 0.12);
    el.style.willChange = 'transform';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) active.add(el);
        else active.delete(el);
      }
      requestTick();
    },
    { threshold: 0, rootMargin: '20% 0px 20% 0px' },
  );

  elements.forEach((el) => observer.observe(el));

  function requestTick() {
    if (rafId) return;
    rafId = window.requestAnimationFrame(update);
  }

  function update() {
    rafId = 0;
    if (active.size === 0) return;

    const viewportH = window.innerHeight || 1;
    for (const el of active) {
      const rect = el.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      const progress = (mid - viewportH / 2) / (viewportH / 2);
      const clamped = Math.max(-1, Math.min(1, progress));

      const strength = strengthByEl.get(el) ?? 0.12;
      const maxPx = Math.max(12, Math.min(80, strength * 240));
      const y = -clamped * maxPx;

      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick, { passive: true });
  requestTick();

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener('scroll', requestTick);
    window.removeEventListener('resize', requestTick);
    observer.disconnect();
    elements.forEach((el) => {
      el.style.transform = '';
      el.style.willChange = '';
    });
  };
}

