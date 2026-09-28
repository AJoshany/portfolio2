<template>
  <li class="logo-sec flex flex-col items-center gap-[2rem]">
    <svg class="icon1" aria-hidden="true">
      <use :xlink:href="`/sprite-skills.svg#${src}`"></use>
    </svg>
    <span class="text-[2rem] font-[600]">{{ label }}</span>
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
  max-width: 120px;
  max-height: 120px;

  transition: filter 0.3s ease;
}
@media screen and (max-width: 768px) {
  .icon1 {
    max-width: 80px;
    max-height: 80px;
  }
}

.logo-sec {
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);

    .icon1 {
      filter: hue-rotate(100deg);
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .logo-sec:hover {
    transform: none;
  }
}
</style>
