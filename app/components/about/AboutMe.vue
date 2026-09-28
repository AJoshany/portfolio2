<template>
  <section
    id="about"
    class="max-w-[120rem] mx-auto px-[3rem] grid md:grid-cols-2 gap-[8rem] justify-items-center items-center"
  >
    <div class="about__content flex flex-col gap-[2rem]">
      <p class="text-brand font-[600] text-[1.3rem] tracking-[0.2em] uppercase">
        About Me
      </p>
      <h2 class="text-[4rem] md:text-[5.2rem] font-[600] leading-[1.1]">
        Who I am
      </h2>
      <p class="text-[1.7rem] text-muted max-w-[50rem]">
        I’m a front-end developer focused on Vue, Nuxt, and React. I build
        responsive interfaces and component systems — from marketing pages to
        data-heavy dashboards — with Tailwind, MUI, and SCSS, and I care about
        keeping them fast and accessible.
      </p>
      <div class="flex flex-col gap-[2rem] pt-[1rem]">
        <AboutProgressBar label="JavaScript" :level="80" />
        <AboutProgressBar label="React" :level="70" />
        <AboutProgressBar label="Vue" :level="60" />
        <AboutProgressBar label="Nuxt" :level="30" />
      </div>
    </div>
    <div class="relative order-last md:order-first md:justify-self-start">
      <div class="avatar-glow" aria-hidden="true"></div>
      <div
        class="avatar max-w-[420px] border-[3px] border-[--color-orange-500] rounded-[--rounded] overflow-hidden mx-auto"
      >
        <img
          src="~/assets/img/avatar2.webp"
          alt="Portrait of Ali Joshany"
          width="320"
          height="320"
          loading="lazy"
          decoding="async"
          class="block w-full h-auto"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.avatar-glow {
  position: absolute;
  inset: 10%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    var(--color-brand-glow) 0%,
    transparent 65%
  );
  pointer-events: none;
}

.avatar {
  box-shadow: inset 0 0 100px 30px var(--color-avatar-tint);
}
</style>
