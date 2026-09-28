<template>
  <div class="w-full flex flex-col gap-[1rem]">
    <div class="flex justify-between items-baseline">
      <span class="text-[1.7rem] font-[600]">{{ label }}</span>
      <span class="text-[1.3rem] text-muted">{{ level }}%</span>
    </div>
    <div
      class="flex items-center w-full h-[0.8rem] relative rounded-full bg-[--color-bg-raised] overflow-hidden border border-line"
      role="img"
      :aria-label="`${label}: ${level}%`"
    >
      <div
        class="h-full rounded-full bg-gradient-to-r from-[--color-orange-400] to-[--color-orange-500]"
        :style="{ width: `${level}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  level: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

<style></style>
