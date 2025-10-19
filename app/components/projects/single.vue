<template>
  <div class="flex flex-col gap-[0.5rem] md:gap-[1rem] max-w-[50rem]">
    <img :src="imgSrc" :alt="title" class="rounded-[--radius-md]" />
    <div class="flex flex-col md:gap-[1rem]">
      <p class="text-[1.4rem] text-[--color-orange-500] pt-[1rem]">
        {{ category }}
      </p>
      <h4 class="text-[1.9rem] font-[700]">{{ title }}</h4>
    </div>
  </div>
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
  imgSrc: {
    type: String,
    // required:true
  },
});
</script>
