<template>
  <section class="flex flex-col items-center gap-[4rem]">
    <div class="text-center md:max-w-[70%] flex flex-col gap-[1.5rem]">
      <h2 class="text-[5.2rem] font-[600]">My Projects</h2>
      <p class="text-[1.7rem]">
        These are a few of the projects I’ve crafted along my development journey. To discover more of what I’ve been building, check out my resume.
      </p>
    </div>
    <div
      class="w-full flex flex-col md:flex-row gap-[4rem] md:gap-[3.5rem] items-center justify-between"
    >
      <ProjectsSingle
        v-for="(item, index) in projects"
        :key="index"
        :title="item.title"
        :category="item.category"
        :img-src="item.imgSrc"
        :id="item.id"
      />
    </div>
    <NuxtLink
      to="/projects"
      class="text-[1.4rem] text-[--color-orange-500] self-end hover:text-[--color-orange-200] transition-all mt-[-2rem] md:mt-0"
      >Show more...</NuxtLink
    >
  </section>
</template>

<script setup>
import partBankImg from "~/assets/img/part-bank.webp";
import realEstateImg from "~/assets/img/real-estate.webp";
const projects = [
  {
    title: "Personal Portfolio",
    category: "Nuxt Js",
    id:'portfolio',
    imgSrc: partBankImg,
  },
  {
    title: "Part Bank",
    category: "Vue Js",
    id:'part-bank',
    imgSrc: partBankImg,
  },
  {
    title: "Real Estate",
    category: "Vue Js",
    id:'real-estate',
    imgSrc: realEstateImg,
  },
];
</script>
