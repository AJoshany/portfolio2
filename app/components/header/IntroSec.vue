<template>
  <section class="relative overflow-hidden">
    <!-- ambient glow -->
    <div
      class="glow absolute w-[60rem] h-[60rem] rounded-full pointer-events-none"
      aria-hidden="true"
    ></div>

    <div
      class="max-w-[120rem] mx-auto px-[3rem] grid lg:grid-cols-2 gap-[6rem] lg:gap-[10rem] justify-items-center items-center pt-[6rem] lg:pt-[10rem] pb-[4rem] text-[1.7rem]"
    >
      <div class="intro__content relative">
        <p
          class="inline-flex items-center gap-[1rem] px-[1.6rem] py-[0.6rem] rounded-full border border-line bg-raised text-muted text-[1.3rem] mb-[2.4rem]"
        >
          <span
            class="w-[0.8rem] h-[0.8rem] rounded-full bg-[--color-orange-500]"
            aria-hidden="true"
          ></span>
          Available for new opportunities
        </p>

        <hgroup>
          <p class="font-[600] text-[1.9rem] text-muted">Hi, I’m</p>
          <h1 class="text-brand text-[2.6rem] font-[600]">Ali Joshany</h1>
          <p
            class="flex flex-col text-[4.6rem] lg:text-[8.4rem] font-[700] leading-[1.05] tracking-[-0.02em]"
          >
            <span>Front-End</span>
            <span
              class="self-end text-transparent bg-clip-text bg-gradient-to-r from-[--color-orange-500] to-[--color-orange-600]"
              >Developer</span
            >
          </p>
        </hgroup>

        <p class="py-[2.4rem] max-w-[46rem] text-muted text-[1.8rem] leading-[1.7]">
          I build production interfaces with Vue, Nuxt, and React — component
          libraries, dashboards, and stores that stay fast and hold up in code
          review.
        </p>

        <div class="flex items-center gap-[1.6rem] flex-wrap">
          <NuxtLink
            to="/#contact"
            class="px-[3.6rem] py-[1.2rem] font-[600] text-[--color-on-brand] bg-[--color-orange-500] rounded-[--radius-xsm] hover:bg-[--color-orange-400] hover:-translate-y-[0.2rem] transition-all duration-200"
          >
            Contact Me
          </NuxtLink>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="px-[3.6rem] py-[1.2rem] font-[600] text-brand border-[2px] border-[--color-orange-500] rounded-[--radius-xsm] hover:bg-[--color-on-brand-soft] transition-colors duration-200"
          >
            Download CV
          </a>
        </div>
      </div>

      <div
        class="intro__img-sec relative flex flex-col items-center gap-[3rem] lg:justify-self-end"
      >
        <div
          class="avatar max-w-[380px] lg:max-w-[440px] w-full rounded-[--rounded] border-[3px] border-[--color-orange-500]"
        >
          <img
            src="~/assets/img/avatar.webp"
            alt="Portrait of Ali Joshany"
            width="320"
            height="320"
            fetchpriority="high"
            decoding="async"
            class="block w-full h-auto rounded-[--rounded]"
          />
        </div>
        <SocialIcons />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.glow {
  top: -20rem;
  right: -15rem;
  background: radial-gradient(
    circle,
    var(--color-brand-glow) 0%,
    transparent 60%
  );
}

.avatar {
  box-shadow:
    inset 0 0 100px 30px var(--color-avatar-tint),
    0 0 80px var(--color-brand-glow);
  transition: box-shadow 0.3s ease;

  img {
    transition: filter 0.3s ease;
  }
}

.avatar:hover {
  box-shadow: inset 0 0 30px 10px var(--color-avatar-tint);

  img {
    filter: saturate(1.15);
  }
}

@media (prefers-reduced-motion: reduce) {
  .avatar,
  .avatar img {
    transition: none;
  }
}
</style>
