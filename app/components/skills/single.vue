<template>
  <li
    class="logo-sec flex flex-col items-center justify-center gap-[1.6rem] bg-raised border border-line rounded-[--radius-md] py-[3rem] px-[1.5rem] transition-all duration-200 hover:border-[--color-orange-500] hover:-translate-y-[0.4rem]"
  >
    <svg class="icon1" aria-hidden="true">
      <use :xlink:href="`/sprite-skills.svg#${src}`"></use>
    </svg>
    <span class="text-[1.7rem] font-[600]">{{ label }}</span>
  </li>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.icon1 {
  width: 7rem;
  height: 7rem;
  transition: filter 0.2s ease;
}

@media (max-width: 768px) {
  .icon1 {
    width: 5.5rem;
    height: 5.5rem;
  }
}

.logo-sec:hover .icon1 {
  filter: drop-shadow(0 0 12px var(--color-brand-glow));
}

@media (prefers-reduced-motion: reduce) {
  .logo-sec,
  .icon1 {
    transition: none;
  }

  .logo-sec:hover {
    transform: none;
  }
}
</style>
