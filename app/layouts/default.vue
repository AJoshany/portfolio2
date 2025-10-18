<template>
  <div class="w-full flex flex-col items-center justify-between min-h-[100vh]">
  <div class="container px-[3rem] py-8 md:py-[4rem]">
    <HeaderTopNavbar />
    <slot></slot>
  </div>
  <FooterViewer/>
  </div>
 

</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
