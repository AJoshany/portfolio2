<template>
  <div
    class="project flex flex-col md:flex-row md:gap-[4rem]"
    :class="{ 'md:flex-row-reverse': reverse }"
    :id="project.id"
    :data-aos="reverse ? 'fade-left' : 'fade-right'"
  >
    <img
      :src="project.image"
      :alt="project.title"
      class="max-w-[100%] md:max-w-[50%] rounded-[--radius-lg]"
    />

    <div class="content flex flex-col gap-[2rem] pt-[1rem] md:pt-[4rem]">
      <h3 class="text-[3rem] font-[600]">
        {{ project.title }}
      </h3>

      <p>
        {{ project.description }}
      </p>

      <div class="flex flex-col gap-[1rem] pt-[3rem]">
        <div v-for="info in project.info" :key="info.label" class="info">
          <p>- {{ info.label }}:</p>

          <p v-if="info.value">
            {{ info.value }}
          </p>

          <NuxtLink
            v-else-if="info.url"
            :to="info.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[--color-orange-500]"
          >
            view
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProjectInfo {
  label: string;
  value?: string;
  url?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  info: ProjectInfo[];
}

defineProps<{
  project: Project;
  reverse?: boolean;
}>();
</script>

<style scoped lang="scss">
.info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.info p:nth-child(1) {
  font-weight: 600;
}
</style>
