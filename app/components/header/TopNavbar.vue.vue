<template>
  <div class="text-[1.7rem] flex justify-between items-center">
    <p class="text-[--color-orange-500] font-[600] text-[1.9rem]">
      Ali Joshany
    </p>

    <nav
      class="top-nav flex items-center gap-[1.2rem] text-[--color-black-500]"
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

<script lang="ts" setup>
const navItemList = ["Home", "About Me", "Skills", "Projects", "Contact"];
</script>

<style></style>
