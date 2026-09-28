<template>
  <li>
    <NuxtLink
      :to="`/projects/#${id}`"
      class="group flex flex-col gap-[0.5rem] md:gap-[1rem] max-w-[50rem]"
    >
      <img
        :src="imgSrc"
        :alt="`${title} — project screenshot`"
        width="500"
        height="313"
        loading="lazy"
        decoding="async"
        class="rounded-[--radius-md] w-full h-auto"
      />
      <div class="flex flex-col md:gap-[1rem]">
        <p class="text-[1.4rem] text-[--color-orange-500] pt-[1rem]">
          {{ category }}
        </p>
        <h3 class="text-[1.9rem] font-[700] group-hover:underline">
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
