<template>
  <section class="max-w-[120rem] mx-auto px-[3rem] flex flex-col gap-[5rem]">
    <div class="text-center flex flex-col gap-[1.5rem] pt-[4rem]">
      <p class="text-brand font-[600] text-[1.3rem] tracking-[0.2em] uppercase">
        Work
      </p>
      <h1 class="text-[4.6rem] md:text-[5.2rem] font-[600] leading-[1.1]">
        Projects
      </h1>
      <p class="text-[1.7rem] text-muted max-w-[60rem] mx-auto">
        Everything below is built and running — each project lists the stack
        behind it, with a live demo and source where available.
      </p>
    </div>

    <div class="flex flex-col gap-[3rem] md:gap-[4rem] pb-[2rem]">
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
import ProjectCard from '~/components/projects/ProjectCard.vue'

useHead({
  title: 'Projects — Ali Joshany, Front-End Developer',
  link: [{ rel: 'canonical', href: 'https://joshany.ir/projects' }],
  meta: [
    {
      name: 'description',
      content:
        'Web projects built with Vue, Nuxt, React and Next.js — CRM dashboards, finance and booking apps, and this portfolio, each with a live demo.',
    },
    {
      property: 'og:title',
      content: 'Projects — Ali Joshany, Front-End Developer',
    },
    {
      property: 'og:description',
      content:
        'Web projects built with Vue, Nuxt, React and Next.js — CRM dashboards, finance and booking apps, and this portfolio, each with a live demo.',
    },
    { property: 'og:url', content: 'https://joshany.ir/projects' },
    {
      name: 'twitter:title',
      content: 'Projects — Ali Joshany, Front-End Developer',
    },
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
