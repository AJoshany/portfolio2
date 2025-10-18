<template>
  <section class="flex flex-col items-center gap-[4rem]">
    <div
      class="skills__header text-center md:max-w-[70%] flex flex-col gap-[1.5rem]"
    >
      <h2 class="text-[5.2rem] font-[600]">Skills</h2>
      <p class="text-[1.7rem]">
        These are some of the tools in my developer’s toolbox. To see everything
        I’ve been sharpening, take a look at my full resume.
      </p>
    </div>
    <div
      class="flex justify-around md:justify-center gap-[6rem] gap-y-[3rem] md:gap-x-[15rem] md:gap-y-[8rem] flex-wrap content-center w-full"
    >
      <skills-single
        v-for="(logo, index) in logos"
        :key="index"
        :label="logo.label"
        :src="logo.src"
      />
    </div>
  </section>
</template>

<script setup>
const logos = [
  { label: "Vue Js", src: "Vue_logo" },
  { label: "Nuxt Js", src: "Nuxt_logo" },
  { label: "React Js", src: "React_logo" },
  { label: "Javascript", src: "Javascript_logo" },
  { label: "HTML", src: "HTML5_logo" },
  { label: "CSS", src: "CSS3_logo" },
  { label: "Tailwind", src: "Tailwind_logo" },
  { label: "Bootstrap", src: "Bootstrap_logo" },
  { label: "Git", src: "Git_logo" },
  { label: "Wordpress", src: "WordPress_logo" },
];
</script>

<style></style>
