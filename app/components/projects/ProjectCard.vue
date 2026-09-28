<template>
  <article
    :id="project.id"
    class="project flex flex-col md:flex-row md:gap-[4rem]"
    :class="{ 'md:flex-row-reverse': reverse }"
  >
    <img
      :src="project.image"
      :alt="`${project.title} — project screenshot`"
      width="500"
      height="313"
      loading="lazy"
      decoding="async"
      class="max-w-[100%] md:max-w-[50%] rounded-[--radius-lg] w-full h-auto"
    />

    <div class="content flex flex-col gap-[2rem] pt-[1rem] md:pt-[4rem]">
      <h3 class="text-[3rem] font-[600]">
        {{ project.title }}
      </h3>

      <p>
        {{ project.description }}
      </p>

      <dl class="flex flex-col gap-[1rem] pt-[3rem]">
        <div v-for="info in project.info" :key="info.label" class="info">
          <dt class="font-[600]">{{ info.label }}</dt>
          <dd v-if="info.value">
            {{ info.value }}
          </dd>
          <dd v-else-if="info.url">
            <a
              :href="info.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[--color-orange-500] underline hover:text-[--color-orange-300]"
            >
              View
            </a>
          </dd>
        </div>
      </dl>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    id: string
    title: string
    description: string
    image: string
    info: {
      label: string
      value?: string
      url?: string
    }[]
  }
  reverse?: boolean
}>()
</script>

<style scoped lang="scss">
.info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;

  dt::after {
    content: ':';
  }
}
</style>
