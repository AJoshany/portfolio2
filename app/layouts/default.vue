<template>
  <div class="w-full flex flex-col items-center justify-between min-h-[100vh]">
    <a href="#main" class="skip-link">Skip to main content</a>
    <div class="w-full">
      <HeaderTopNavbar />
      <main id="main" class="w-full">
        <slot></slot>
      </main>
    </div>
    <FooterViewer class="mt-[7rem] w-full" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
