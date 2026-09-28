<template>
  <section class="max-w-[120rem] mx-auto px-[3rem] flex flex-col items-center gap-[5rem]">
    <div class="text-center flex flex-col gap-[1.5rem] max-w-[60rem]">
      <p class="text-brand font-[600] text-[1.3rem] tracking-[0.2em] uppercase">
        Work
      </p>
      <h2 class="text-[4rem] md:text-[5.2rem] font-[600] leading-[1.1]">
        Selected projects
      </h2>
      <p class="text-[1.7rem] text-muted">
        Recent work — with live demos and source code for each. The complete
        list is on the
        <NuxtLink
          to="/projects"
          class="text-brand underline underline-offset-4 hover:text-[--color-orange-600]"
          >projects page</NuxtLink
        >.
      </p>
    </div>

    <ul
      class="grid grid-cols-1 md:grid-cols-3 gap-[2.5rem] w-full max-w-[110rem]"
    >
      <ProjectsSingle
        v-for="item in featured"
        :key="item.id"
        :title="item.title"
        :category="item.category"
        :img-src="item.imgSrc"
        :id="item.id"
      />
    </ul>

    <NuxtLink
      to="/projects"
      class="self-center px-[3.6rem] py-[1.2rem] font-[600] text-brand border-[2px] border-[--color-orange-500] rounded-[--radius-xsm] hover:bg-[--color-on-brand-soft] transition-colors duration-200"
    >
      View all projects
    </NuxtLink>
  </section>
</template>

<script setup>
import partBankImg from '~/assets/img/part-bank.webp'
import portfolioImg from '~/assets/img/portfolio.webp'
import realEstateImg from '~/assets/img/real-estate.webp'

const featured = [
  {
    title: 'Part Bank',
    category: 'Vue 3',
    id: 'part-bank',
    imgSrc: partBankImg,
  },
  {
    title: 'Portfolio',
    category: 'Nuxt',
    id: 'portfolio',
    imgSrc: portfolioImg,
  },
  {
    title: 'Real Estate',
    category: 'Vue 3',
    id: 'real-estate',
    imgSrc: realEstateImg,
  },
]
</script>
