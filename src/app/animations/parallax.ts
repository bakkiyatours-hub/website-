function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

export async function initParallax(root: ParentNode = document) {
  if (typeof window === 'undefined') return () => {};
  if (prefersReducedMotion()) return () => {};

  const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (elements.length === 0) return () => {};

  try {
    const gsapModule = await import('gsap');
    const scrollTriggerModule = await import('gsap/ScrollTrigger');

    const gsap = gsapModule.default;
    const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    elements.forEach((el) => {
      const strength = Number(el.dataset.parallax ?? '0.12');
      const yPercent = Math.max(-40, Math.min(40, strength * 100));

      gsap.to(el, {
        yPercent,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(elements);
    };
  } catch {
    return () => {};
  }
}

