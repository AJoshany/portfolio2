<template>
  <div class="flex flex-col">
    <HeaderIntroSec v-reveal="'fade-right'" class="pt-[2rem] lg:pt-[10rem]" />
    <AboutMe id="about" v-reveal="'fade-left'" class="pt-[7rem]" />
    <SkillsViewer id="skills" v-reveal="'fade-right'" class="pt-[7rem]" />
    <ProjectsViewer v-reveal="'fade-left'" class="pt-[7rem]" />
    <ContactViewer id="contact" v-reveal="'zoom-in'" class="pt-[7rem]" />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
