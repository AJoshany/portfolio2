import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    const isMobile = window.innerWidth < 768
    AOS.init({
      duration: isMobile ? 400 : 800,
      once: true,    
      easing: 'ease-out',
      offset: isMobile ? 50 : 120,
    })
  }
})
