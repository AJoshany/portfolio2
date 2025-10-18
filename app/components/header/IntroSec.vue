<template>
  <section class="flex flex-col">
    <div
      class="grid lg:grid-cols-2 gap-[6rem] lg:gap-[12rem] justify-items-center items-center text-[1.6rem]"
    >
      <div class="intro__content">
        <p class="font-[600] text-[1.9rem]">Hi i am</p>
        <p class="text-[--color-orange-500] text-[2.5rem] font-[600]">
          Ali Joshany
        </p>
        <div class="flex flex-col text-[5rem] lg:text-[9rem] font-[700]">
          <h2 class="mt-[-1.5rem] lg:mt-[-3rem]">Front End</h2>
          <h2 class="mt-[-3rem] lg:mt-[-5rem] self-end">Developer</h2>
        </div>
        <p class="py-[2rem] text-justify">
          Front-End Developer with hands-on experience in React and Vue.js.
          Passionate about creating responsive, user-friendly web interfaces
          using modern technologies such as Tailwind, Material UI, and SCSS.
        </p>
        <button
          class="px-[4.5rem] py-[1rem] text-white bg-[--color-orange-500] rounded-[--radius-xsm] hover:bg-[--color-orange-200] transition-all"
        >
          Hire Me
        </button>
      </div>
      <div
        class="intro__img-sec flex flex-col items-center gap-[3rem] lg:justify-self-end"
      >
        <div
          class="avatar max-w-[500px] border-[3px] border-[--color-orange-500] rounded-[--rounded]"
        >
          <img src="~/assets/img/avatar.png" alt="avatar" />
        </div>
        <SocialIcons/>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">


.avatar {
  box-shadow: inset 0 0 100px 30px var(--color-orange-300);
  transition: all 0.3s ease;
  
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
