<template>
  <div class="w-full flex flex-col items-center justify-between min-h-[100vh]">
  <div class="container px-[3rem] py-4 md:py-[4rem]">
    <HeaderTopNavbar data-aos="fade-down" />
    <slot></slot>
  </div>
  <FooterViewer class="mt-[7rem]" data-aos="fade-up"/>
  </div>
 

</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
