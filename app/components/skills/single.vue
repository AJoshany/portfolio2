<template>
  <div class="logo-sec flex flex-col items-center gap-[2rem]">
    <svg class="icon1">
      <use :xlink:href="`/sprite-skills.svg#${src}`"></use>
    </svg>
    <p class="text-[2rem] font-[600]">{{ label }}</p>
  </div>
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
});
</script>

<style lang="scss" scoped>
.icon1 {
  max-width: 120px;
  max-height: 120px;
  filter: grayscale(0);
  transition: all 0.3s ease;
}
@media screen and (max-width: 768px) {
  .icon1 {
    max-width: 80px;
    max-height: 80px;
  }
}

.logo-sec {
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-8px);
    .icon1 {
      filter: grayscale(100%);
    }
  }
}
</style>
