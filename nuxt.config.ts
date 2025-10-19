// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: ['@nuxtjs/tailwindcss' , 'nuxt-svgo','nuxt-toast'
  ,['nuxt-mail', {
      message: {
        to: 'aa6joshany@gmail.com',
      },
      smtp: {
        service: 'gmail',
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
            user: 'aaa6joshany@gmail.com',
            pass: 'lvpd bzam ssjy fxhx',
          },
      },
    }],],
  css: ['~/assets/css/main.css'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;'
        }
      }
    }
  },


})
