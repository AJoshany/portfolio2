<template>
  <header
    class="text-[1.5rem] w-full sticky top-0 z-[100] bg-[--color-bg-glass] backdrop-blur-md border-b border-line"
  >
    <nav
      class="max-w-[120rem] mx-auto flex justify-between items-center px-[3rem] py-[1.6rem]"
      aria-label="Main navigation"
    >
      <NuxtLink to="/" class="font-[600] text-[1.9rem] flex items-center gap-[1rem]">
        <span
          class="inline-block w-[1.2rem] h-[1.2rem] rounded-full bg-[--color-orange-500]"
          aria-hidden="true"
        ></span>
        Ali Joshany
      </NuxtLink>

      <div class="flex items-center gap-[0.8rem]">
        <button
          type="button"
          class="theme-toggle flex items-center justify-center w-[4rem] h-[4rem] rounded-[--radius-xsm] border border-line text-muted hover:text-brand transition-colors"
          :aria-label="isLightTheme ? 'Switch to dark theme' : 'Switch to light theme'"
          @click="toggleTheme"
        >
          <!-- sun (shown in dark mode = switch to light) -->
          <svg
            v-if="!isLightTheme"
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            />
          </svg>
          <!-- moon (shown in light mode = switch to dark) -->
          <svg
            v-else
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>

        <button
          type="button"
          class="mobile-toggle md:hidden flex items-center justify-center w-[4rem] h-[4rem] rounded-[--radius-xsm] border border-line text-muted transition-colors hover:text-brand"
          :aria-expanded="showMobileMenu"
          aria-controls="site-nav"
          :aria-label="showMobileMenu ? 'Close menu' : 'Open menu'"
          @click="showMobileMenu = !showMobileMenu"
        >
          <svg
            v-if="!showMobileMenu"
            aria-hidden="true"
            width="22"
            height="22"
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
            width="22"
            height="22"
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
      </div>

      <div
        v-if="showMobileMenu"
        class="overlay md:hidden"
        @click="showMobileMenu = false"
      ></div>

      <div
        id="site-nav"
        class="top-nav hidden md:flex items-center gap-[0.6rem]"
        :class="{ 'show-menu': showMobileMenu }"
      >
        <ul class="flex flex-col md:flex-row items-start md:items-center gap-[0.4rem] md:gap-[0.6rem]">
          <li v-for="item in navItemList" :key="item.route">
            <NuxtLink
              class="px-[1.2rem] py-[0.8rem] rounded-[--radius-xsm] text-muted hover:text-[--color-text] hover:bg-[--color-bg-raised] transition-colors duration-200"
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
          class="px-[1.6rem] py-[0.8rem] bg-[--color-orange-500] text-[--color-on-brand] font-[600] rounded-[--radius-xsm] hover:bg-[--color-orange-400] transition-colors duration-200 ml-[0.6rem]"
        >
          Download CV
        </a>
      </div>
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
const isLightTheme = ref(false)
const { $theme } = useNuxtApp()

onMounted(() => {
  isLightTheme.value = $theme.isLight()
})

const toggleTheme = () => {
  $theme.toggle()
  isLightTheme.value = $theme.isLight()
}

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
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
}

.show-menu {
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex !important;
  min-width: 65%;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--color-surface);
  border-left: 1px solid var(--color-border);
  padding: 2rem;
}
</style>
