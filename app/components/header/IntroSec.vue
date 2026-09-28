<template>
  <section class="flex flex-col">
    <div
      class="grid lg:grid-cols-2 gap-[6rem] lg:gap-[12rem] justify-items-center items-center text-[1.6rem]"
    >
      <div class="intro__content">
        <p class="font-[600] text-[1.9rem]">Hi, I’m</p>
        <hgroup>
          <h1 class="text-[--color-orange-500] text-[2.5rem] font-[600]">
            Ali Joshany
          </h1>
          <p class="flex flex-col text-[5rem] lg:text-[9rem] font-[700]">
            <span class="mt-[-1.5rem] lg:mt-[-3rem]">Front-End</span>
            <span class="mt-[-3rem] lg:mt-[-5rem] self-end">Developer</span>
          </p>
        </hgroup>
        <p class="py-[2rem]">
          I build production interfaces with Vue, Nuxt, and React — component
          libraries, dashboards, and stores that stay fast and hold up in code
          review.
        </p>
        <div class="flex items-center gap-[2rem] flex-wrap">
          <NuxtLink
            to="/#contact"
            class="px-[4.5rem] py-[1rem] text-white bg-[--color-orange-500] rounded-[--radius-xsm] hover:bg-[--color-orange-200] transition-colors"
          >
            Contact Me
          </NuxtLink>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="px-[4.5rem] py-[1rem] text-[--color-orange-500] border-[2px] border-[--color-orange-500] rounded-[--radius-xsm] hover:bg-[--color-orange-50] transition-colors"
          >
            View Résumé
          </a>
        </div>
      </div>
      <div
        class="intro__img-sec flex flex-col items-center gap-[3rem] lg:justify-self-end"
      >
        <div
          class="avatar max-w-[500px] border-[3px] border-[--color-orange-500] rounded-[--rounded]"
        >
          <img
            src="~/assets/img/avatar.webp"
            alt="Portrait of Ali Joshany"
            width="320"
            height="320"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <SocialIcons />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.avatar {
  box-shadow: inset 0 0 100px 30px var(--color-orange-300);
  transition: box-shadow 0.3s ease;

  img {
    transition: filter 0.3s ease;
    filter: grayscale(0);
  }
}
.avatar:hover {
  box-shadow: inset 0 0 30px 10px var(--color-orange-300);
  img {
    filter: grayscale(50%);
  }
}
</style>
