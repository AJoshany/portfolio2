// Shared reveal directive: registers elements with a single IntersectionObserver.
// SSR renders elements fully visible (opacity 1) so nothing is hidden without JS;
// the client plugin re-hides below-fold items just before hydration paint.
export const reveal = {
  mounted(el, binding) {
    if (el.__revealCleanup) {
      el.__revealCleanup()
    }
    if (typeof window === 'undefined') return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.9) {
      // Above the fold — already visible, don't touch it.
      return
    }

    el.setAttribute('data-reveal', binding.value || 'fade-up')
    // Force a reflow so the hidden state paints before we observe.
    void el.offsetHeight

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.disconnect()
          }
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    el.__revealCleanup = () => observer.disconnect()
  },
  getSSRProps() {
    return {}
  },
}
