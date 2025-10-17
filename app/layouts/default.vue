<template>
  <div class="container px-4 py-5 md:px-0 md:py-[4rem]">
    <TopNavbarVue />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import TopNavbarVue from "~/components/header/TopNavbar.vue.vue";
</script>

<style lang="scss" scoped></style>
