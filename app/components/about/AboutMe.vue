<template>
  <section
    id="about"
    class="w-full grid md:grid-cols-2 gap-[8rem] justify-items-center items-center"
  >
    <div class="about__content flex flex-col gap-[1.5rem]">
      <h2 class="text-[5.2rem] font-[600]">About Me</h2>
      <p class="text-[1.7rem]">
        I’m a front-end developer focused on Vue, Nuxt, and React. I build
        responsive interfaces and component systems — from marketing pages to
        data-heavy dashboards — with Tailwind, MUI, and SCSS, and I care about
        keeping them fast and accessible.
      </p>
      <div class="flex flex-col gap-[1.5rem]">
        <AboutProgressBar label="JavaScript" :level="80" />
        <AboutProgressBar label="React" :level="70" />
        <AboutProgressBar label="Vue" :level="60" />
        <AboutProgressBar label="Nuxt" :level="30" />
      </div>
    </div>
    <div
      class="avatar max-w-[520px] border-[3px] border-[--color-orange-500] rounded-[--rounded] order-last md:order-first md:justify-self-start overflow-hidden"
    >
      <img
        src="~/assets/img/avatar2.webp"
        alt="Second portrait of Ali Joshany"
        width="320"
        height="320"
        loading="lazy"
        decoding="async"
      />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.avatar {
  box-shadow: inset 0 0 100px 30px var(--color-orange-300);
}
</style>
