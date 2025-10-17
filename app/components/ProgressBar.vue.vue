<template>
  <div class="w-full flex flex-col gap-[0.8rem]">
    <p class="text-[1.9rem] font-[600] text-[--color-black-500]">{{ labal }}</p>
    <div
      class="progress flex items-center w-full h-[1.2rem] relative rounded-[0.6rem] bg-[#EDECEC]"
    >
      <div
        class="w-[3rem] h-[3rem] absolute rounded-full bg-[#EDECEC] border-[3px] border-[--color-orange-500] shadow-[0_4px_7px_rgba(0,0,0,0.25)]"
        :style="{ left: `${level - 2}%` }"
      ></div>
      <div
        class="h-full bg-[--color-orange-500] rounded-[0.6rem]"
        :style="{ width: `${level}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  level: {
    type: Number,
    required: true,
  },
  labal: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
