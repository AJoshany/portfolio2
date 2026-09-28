<template>
  <div>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<script setup>
const siteUrl = 'https://joshany.ir'

useHead({
  titleTemplate: (title) =>
    title ? `${title}` : 'Ali Joshany — Front-End Developer (Vue, Nuxt, React)',
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'canonical', href: `${siteUrl}/` },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    {
      name: 'description',
      content:
        'Front-End Developer building production Vue, Nuxt and React interfaces. See live projects, real code, and a resume on joshany.ir.',
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Ali Joshany' },
    { name: 'theme-color', content: '#0c0a09' },

    // Open Graph
    { property: 'og:site_name', content: 'Ali Joshany — Front-End Developer' },
    { property: 'og:title', content: 'Ali Joshany — Front-End Developer (Vue, Nuxt, React)' },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:description',
      content:
        'Front-End Developer building production Vue, Nuxt and React interfaces. Live demos and source code for every project.',
    },
    { property: 'og:image', content: `${siteUrl}/preview.png` },
    { property: 'og:image:alt', content: 'Preview of Ali Joshany’s portfolio site' },
    { property: 'og:url', content: `${siteUrl}/` },
    { property: 'og:locale', content: 'en_US' },

    // Twitter/X
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Ali Joshany — Front-End Developer (Vue, Nuxt, React)' },
    {
      name: 'twitter:description',
      content:
        'Front-End Developer building production Vue, Nuxt and React interfaces. Live demos and source code for every project.',
    },
    { name: 'twitter:image', content: `${siteUrl}/preview.png` },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Ali Joshany',
        url: siteUrl,
        jobTitle: 'Front-End Developer',
        description:
          'Front-End Developer working with Vue, Nuxt, React and modern CSS.',
        sameAs: [
          'https://github.com/AJoshany',
          'https://www.linkedin.com/in/ali-joshany/',
        ],
      }),
    },
  ],
})
</script>

<style lang="scss">
// page transition styles now live in assets/css/main.css (reduced-motion aware)
</style>
