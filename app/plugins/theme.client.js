const COLOR_SCHEME_QUERY = '(prefers-color-scheme: light)'

export default defineNuxtPlugin(() => {
  const isLight = () => document.documentElement.classList.contains('light')

  const apply = (light) => {
    document.documentElement.classList.toggle('light', light)
    try {
      localStorage.setItem('theme', light ? 'light' : 'dark')
    } catch {
      /* private mode — theme still applies for this visit */
    }
  }

  const theme = {
    toggle: () => apply(!isLight()),
    isLight,
    systemLight: () => window.matchMedia(COLOR_SCHEME_QUERY).matches,
  }

  return { provide: { theme } }
})
