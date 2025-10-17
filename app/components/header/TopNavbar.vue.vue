<template>
  <div class="text-[1.7rem] md:text-[1.4rem] flex justify-between items-center">
    <p class="text-[--color-orange-500] font-[600] text-[1.9rem]">
      Ali Joshany
    </p>

    <div
      v-if="showMobileMenu"
      class="oerlay"
      @click="showMobileMenu = false"
    ></div>
    <i class="pi pi-align-right text-[2rem]" @click="showMobileMenu = true"></i>

    <nav
      class="top-nav flex items-center gap-[1.2rem] text-[--color-black-500] hidden md:flex transition-right duration-300"
      :class="{ 'show-menu': showMobileMenu }"
    >
      <li
        v-for="(item, index) in navItemList"
        ,
        :key="index"
        class="px-[1rem] py-[0.8rem] cursor-pointer hover:text-[--color-orange-500] transition-all duration-300"
      >
        {{ item }}
      </li>
      <li
        class="px-[1.4rem] py-[0.8rem] bg-[--color-orange-500] text-white rounded-[--radius-xsm] hover:bg-[--color-orange-300] cursor-pointer transition-all duration-300"
      >
        Download CV
      </li>
    </nav>
  </div>
</template>

<script setup>
const navItemList = ["Home", "About Me", "Skills", "Projects", "Contact"];

const showMobileMenu = ref(false);
</script>

<style scoped lang="scss">
.oerlay {
  position: absolute;
  inset: 0;
  background-color: var(--color-black-300);
  opacity: 70%;
}

.show-menu {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;

  display: flex;

  min-width: 60%;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  padding: 2rem;
}

@media screen and (min-width: 768px) {
  .pi {
    display: none;
  }
}
</style>
