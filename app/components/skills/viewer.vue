<template>
  <section class="max-w-[120rem] mx-auto px-[3rem] flex flex-col items-center gap-[5rem]">
    <div class="text-center flex flex-col gap-[1.5rem] max-w-[60rem]">
      <p class="text-brand font-[600] text-[1.3rem] tracking-[0.2em] uppercase">
        Skills
      </p>
      <h2 class="text-[4rem] md:text-[5.2rem] font-[600] leading-[1.1]">
        Tools I work with
      </h2>
      <p class="text-[1.7rem] text-muted">
        The tools I use most, roughly in order of how often I reach for them.
        The full list — including WordPress work — is in my
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="text-brand underline underline-offset-4 hover:text-[--color-orange-600]"
          >resume</a
        >.
      </p>
    </div>

    <ul
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[2rem] w-full max-w-[100rem]"
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
