<template>
  <section
    class="w-full grid md:grid-cols-2 gap-[8rem] justify-items-center items-center"
  >
    <div class="about__content flex flex-col gap-[1.5rem]">
      <h2 class="text-[5.2rem] font-[600]">About Me</h2>
      <p class="text-[1.7rem]">
        Front-End Developer specialized in React and Vue.js, passionate about
        building fast, responsive, and visually appealing web apps with
        Tailwind, Material UI, and SCSS.
      </p>
      <div class="flex flex-col gap-[1.5rem]">
        <AboutProgressBar labal="JavaScript" :level="80" />
        <AboutProgressBar labal="React Js" :level="70" />
        <AboutProgressBar labal="Vue Js" :level="60" />
        <AboutProgressBar labal="Nuxt Js" :level="30" />
      </div>
    </div>
    <div
      class="avatar max-w-[520px] border-[3px] border-[--color-orange-500] rounded-[--rounded] order-last md:order-first md:justify-self-start overflow-hidden"
    >
      <img src="~/assets/img/avatar2.webp" alt="avatar" />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
