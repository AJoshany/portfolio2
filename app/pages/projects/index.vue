<template>
  <section class="pt-[3rem] text-[1.7rem] flex flex-col gap-[5rem]">
    <h1 class="text-[5.2rem] font-[600] text-center">Projects</h1>

    <div class="flex flex-col gap-[10rem] md:gap-[0]">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :reverse="index % 2 !== 0"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'

useHead({
  title: 'Projects — Ali Joshany, Front-End Developer',
  link: [{ rel: 'canonical', href: 'https://joshany.ir/projects' }],
  meta: [
    {
      name: 'description',
      content:
        'Web projects built with Vue, Nuxt, React and Next.js — CRM dashboards, finance and booking apps, and this portfolio, each with a live demo.',
    },
    { property: 'og:title', content: 'Projects — Ali Joshany, Front-End Developer' },
    {
      property: 'og:description',
      content:
        'Web projects built with Vue, Nuxt, React and Next.js — CRM dashboards, finance and booking apps, and this portfolio, each with a live demo.',
    },
    { property: 'og:url', content: 'https://joshany.ir/projects' },
    { name: 'twitter:title', content: 'Projects — Ali Joshany, Front-End Developer' },
  ],
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Projects — Ali Joshany',
        url: 'https://joshany.ir/projects',
        author: { '@type': 'Person', name: 'Ali Joshany' },
      }),
    },
  ],
})
</script>
