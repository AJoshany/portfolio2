<template>
  <main class="flex flex-col items-center">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </main>
</template>

<script setup>
onMounted(() => {
  window.addEventListener("load", () => {
    AOS.refresh();
  });
});


useHead({
  title: "Ali Joshany - Front-End Developer",
  link: [
    { rel: 'canonical', href: 'https://joshany.ir/' }
  ],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Ali Joshany" },
    {
      name: "description",
      content:
        "I'm Ali Joshany, a Front-End Developer skilled in Vue, React, and modern UI design.",
    },

    // Open Graph
    { property: "og:site_name", content: "Ali Joshany Portfolio" },
    { property: "og:title", content: "Ali Joshany - Front-End Developer" },
    { property: "og:type", content: "website" },
    {
      property: "og:description",
      content:
        "Explore my latest web projects built with Vue, React, and Tailwind.",
    },
    { property: "og:image", content: "https://joshany.ir/preview.png" },
    { property: "og:url", content: "https://joshany.ir/" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
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
