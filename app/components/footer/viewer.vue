<template>
  <footer class="w-full border-t border-line bg-[--color-bg-raised]">
    <div
      class="max-w-[120rem] mx-auto px-[3rem] flex flex-col items-center gap-[3rem] py-[6rem]"
    >
      <p class="font-[600] text-[3.2rem] text-brand flex items-center gap-[1.2rem]">
        <span
          class="inline-block w-[1.2rem] h-[1.2rem] rounded-full bg-[--color-orange-500]"
          aria-hidden="true"
        ></span>
        Ali Joshany
      </p>
      <nav
        aria-label="Footer navigation"
        class="text-muted text-[1.5rem]"
      >
        <ul class="flex items-center flex-wrap justify-center gap-[0.6rem]">
          <li v-for="item in navItemList" :key="item.route">
            <NuxtLink
              :to="item.route"
              class="px-[1.2rem] py-[0.8rem] hover:text-[--color-text] transition-colors duration-200"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <SocialIcons />
    </div>
    <div
      class="border-t border-line py-[2rem] text-[1.3rem] text-muted w-full text-center"
    >
      © {{ year }} Ali Joshany. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
const navItemList = [
  { title: 'Home', route: '/' },
  { title: 'About', route: '/#about' },
  { title: 'Skills', route: '/#skills' },
  { title: 'Projects', route: '/projects' },
  { title: 'Contact', route: '/#contact' },
]

const year = new Date().getFullYear()
</script>
