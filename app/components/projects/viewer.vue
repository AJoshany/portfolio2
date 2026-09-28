<template>
  <section class="flex flex-col items-center gap-[4rem]">
    <div class="text-center md:max-w-[70%] flex flex-col gap-[1.5rem]">
      <h2 class="text-[5.2rem] font-[600]">Projects</h2>
      <p class="text-[1.7rem]">
        Recent work — with live demos and source code for each. The complete
        list is on the
        <NuxtLink
          to="/projects"
          class="text-[--color-orange-500] underline hover:text-[--color-orange-300]"
          >projects page</NuxtLink
        >.
      </p>
    </div>
    <ul
      class="w-full flex flex-col md:flex-row gap-[4rem] md:gap-[3.5rem] items-center justify-between"
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
