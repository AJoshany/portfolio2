<template>
  <header
    class="text-[1.7rem] md:text-[1.4rem] flex justify-between items-center sticky top-0 bg-white py-8 z-[100] w-full"
  >
    <NuxtLink to="/" class="text-[--color-orange-500] font-[600] text-[1.9rem]">
      Ali Joshany
    </NuxtLink>

    <button
      type="button"
      class="mobile-toggle md:hidden flex items-center justify-center w-[4rem] h-[4rem] rounded-[--radius-xsm] transition-colors"
      :aria-expanded="showMobileMenu"
      aria-controls="site-nav"
      :aria-label="showMobileMenu ? 'Close menu' : 'Open menu'"
      @click="showMobileMenu = !showMobileMenu"
    >
      <svg
        v-if="!showMobileMenu"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
      <svg
        v-else
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      >
        <line x1="5" y1="5" x2="19" y2="19" />
        <line x1="19" y1="5" x2="5" y2="19" />
      </svg>
    </button>

    <div
      v-if="showMobileMenu"
      class="overlay md:hidden"
      @click="showMobileMenu = false"
    ></div>

    <nav
      id="site-nav"
      class="top-nav flex-col items-start md:flex-row md:items-center md:gap-[1.2rem] gap-[1.2rem] text-[--color-black-500] hidden md:flex z-[101]"
      :class="{ 'show-menu': showMobileMenu }"
      aria-label="Main navigation"
    >
      <ul class="flex flex-col md:flex-row items-start md:items-center gap-[1.2rem]">
        <li v-for="item in navItemList" :key="item.route">
          <NuxtLink
            class="px-[1rem] py-[0.8rem] hover:text-[--color-orange-500] transition-colors duration-300"
            :to="item.route"
            @click="showMobileMenu = false"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="px-[1.4rem] py-[0.8rem] bg-[--color-orange-500] text-white rounded-[--radius-xsm] hover:bg-[--color-orange-300] transition-colors duration-300"
      >
        Download CV
      </a>
    </nav>
  </header>
</template>

<script setup>
const navItemList = [
  { title: 'Home', route: '/' },
  { title: 'About Me', route: '/#about' },
  { title: 'Skills', route: '/#skills' },
  { title: 'Projects', route: '/projects' },
  { title: 'Contact', route: '/#contact' },
]

const showMobileMenu = ref(false)

watch(showMobileMenu, (open) => {
  if (import.meta.client) {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    document.documentElement.style.overflow = ''
  }
})
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  inset: 0;
  background-color: var(--color-black-300);
  opacity: 0.7;
  z-index: 100;
}

.show-menu {
  position: fixed;
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
</style>
