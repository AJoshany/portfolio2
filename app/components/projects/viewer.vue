<template>
<section class="flex flex-col items-center gap-[4rem]">
    <div class="text-center md:max-w-[70%] flex flex-col gap-[1.5rem]">
        <h2 class="text-[5.2rem] font-[600]">My Projects</h2>
        <p class="text-[1.7rem]">
        These are some of the tools in my developer’s toolbox. To see everything
        I’ve been sharpening, take a look at my full resume.
      </p>
    </div>
    <div class="w-full flex gap-[3.5rem] items-center justify-between">
        <ProjectsSingle v-for="(item,index) in projects" :key="index" :title="item.title" :category="item.category" :img-src="item.imgSrc"/>
    </div>
    <NuxtLink to="/projects" class="text-[1.4rem] text-[--color-orange-500] self-end hover:text-[--color-orange-200] transition-all">Show more...</NuxtLink>
</section>
</template>

<script setup>
const projects = [
{title: 'Personal Portfolio' , category:'Nuxt Js' , imgSrc:''},
{title: 'Part Bank' , category:'Vue Js' , imgSrc:''},
{title: 'Real Estate' , category:'Vue Js' , imgSrc:''}
]
</script>