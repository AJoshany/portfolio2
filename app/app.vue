<template>
  <main class="flex flex-col items-center">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </main>
</template>

<script setup>
onMounted(() => {
  window.addEventListener('load', () => {
    AOS.refresh()
  })
})
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
