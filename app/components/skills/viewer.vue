<template>
  <section class="flex flex-col items-center gap-[4rem]">
    <div
      class="skills__header text-center md:max-w-[70%] flex flex-col gap-[1.5rem]"
    >
      <h2 class="text-[5.2rem] font-[600]">Skills</h2>
      <p class="text-[1.7rem]">
        The tools I use most, roughly in order of how often I reach for them.
        The full list — including WordPress work — is in my
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[--color-orange-500] underline hover:text-[--color-orange-300]"
          >résumé</a
        >.
      </p>
    </div>
    <ul
      class="flex justify-around md:justify-center gap-[6rem] gap-y-[3rem] md:gap-x-[15rem] md:gap-y-[8rem] flex-wrap content-center w-full"
    >
      <SkillsSingle
        v-for="logo in logos"
        :key="logo.src"
        :label="logo.label"
        :src="logo.src"
      />
    </ul>
  </section>
</template>

<script setup>
const logos = [
  { label: 'Vue', src: 'Vue_logo' },
  { label: 'Nuxt', src: 'Nuxt_logo' },
  { label: 'React', src: 'React_logo' },
  { label: 'JavaScript', src: 'Javascript_logo' },
  { label: 'HTML', src: 'HTML5_logo' },
  { label: 'CSS', src: 'CSS3_logo' },
  { label: 'Tailwind', src: 'Tailwind_logo' },
  { label: 'Bootstrap', src: 'Bootstrap_logo' },
  { label: 'Git', src: 'Git_logo' },
  { label: 'WordPress', src: 'WordPress_logo' },
]
</script>

<style></style>
