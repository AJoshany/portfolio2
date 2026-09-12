<template>
  <section class="pt-[3rem] text-[1.7rem] flex flex-col gap-[5rem]">
    <h2 class="text-[5.2rem] font-[600] text-center">Projects</h2>

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
import { projects } from "~/data/projects";
import ProjectCard from "~/components/projects/ProjectCard.vue";

useHead({
  title: "Projects - Ali Joshany",
  link: [
    {
      rel: "canonical",
      href: "https://joshany.ir/projects",
    },
  ],
});
</script>
