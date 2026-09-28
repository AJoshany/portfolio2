<template>
  <article
    :id="project.id"
    class="project scroll-mt-[10rem] bg-surface border border-line rounded-[--radius-lg] overflow-hidden flex flex-col md:flex-row md:gap-[4rem] p-[3rem] md:p-[4rem] text-[1.7rem]"
    :class="{ 'md:flex-row-reverse': reverse }"
  >
    <div
      class="img-frame md:max-w-[50%] self-center rounded-[--radius-md] overflow-hidden border border-line"
    >
      <img
        :src="project.image"
        :alt="`${project.title} — project screenshot`"
        width="500"
        height="313"
        loading="lazy"
        decoding="async"
        class="block w-full h-auto"
      />
    </div>

    <div class="content flex flex-col gap-[2rem] pt-[2.4rem] md:pt-0">
      <h2 class="text-[2.8rem] md:text-[3.2rem] font-[600] leading-[1.15]">
        {{ project.title }}
      </h2>

      <p class="text-muted leading-[1.7]">
        {{ project.description }}
      </p>

      <dl class="flex flex-col gap-[1rem] pt-[1rem]">
        <div v-for="info in project.info" :key="info.label" class="info">
          <dt class="text-muted">{{ info.label }}</dt>
          <dd v-if="info.value">
            {{ info.value }}
          </dd>
          <dd v-else-if="info.url">
            <a
              :href="info.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-brand underline underline-offset-4 hover:text-[--color-orange-600]"
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
  align-items: baseline;

  dt {
    min-width: 9rem;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;

    &::after {
      content: ':';
    }
  }
}
</style>
