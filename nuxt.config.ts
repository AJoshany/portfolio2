// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', href: '/favicon.ico', sizes: '32x32' }],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    'nuxt-toast',
    [
      'nuxt-mail',
      {
        message: {
          to: 'aa6joshany@gmail.com',
        },
        smtp: {
          service: 'gmail',
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
            user: process.env.NUXT_SMTP_USER,
            pass: process.env.NUXT_SMTP_PASS,
          },
        },
      },
    ],
  ],
  css: ['~/assets/css/main.css'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;',
        },
      },
    },
  },
})
