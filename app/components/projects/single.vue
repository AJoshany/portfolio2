<template>
  <li>
    <NuxtLink
      :to="`/projects/#${id}`"
      class="group flex flex-col gap-[1.4rem] bg-raised border border-line rounded-[--radius-md] overflow-hidden transition-all duration-200 hover:border-[--color-orange-500] hover:-translate-y-[0.4rem]"
    >
      <div class="overflow-hidden border-b border-line">
        <img
          :src="imgSrc"
          :alt="`${title} — project screenshot`"
          width="500"
          height="313"
          loading="lazy"
          decoding="async"
          class="block w-full h-auto transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div class="flex flex-col gap-[0.4rem] px-[2rem] pb-[2rem]">
        <p class="text-[1.3rem] text-brand font-[600] tracking-[0.08em] uppercase">
          {{ category }}
        </p>
        <h3 class="text-[2rem] font-[700] group-hover:text-brand transition-colors">
          {{ title }}
        </h3>
      </div>
    </NuxtLink>
  </li>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
})
</script>
