<template>
  <div class="intro__socials flex gap-[2rem]">
    <NuxtLink
      to="https://www.linkedin.com/in/ali-joshany/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ali Joshany on LinkedIn"
    >
      <LinkedinIcon class="icon" aria-hidden="true" />
    </NuxtLink>
    <NuxtLink
      to="https://github.com/AJoshany"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ali Joshany on GitHub"
    >
      <GithubIcon class="icon" aria-hidden="true" />
    </NuxtLink>
    <NuxtLink
      to="https://www.instagram.com/ali.joshany/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ali Joshany on Instagram"
    >
      <InstagramIcon class="icon" aria-hidden="true" />
    </NuxtLink>
  </div>
</template>
<script setup>
import LinkedinIcon from '~/assets/icons/linkedin-icon.svg'
import InstagramIcon from '~/assets/icons/instagram-icon.svg'
import GithubIcon from '~/assets/icons/github-icon.svg'
</script>

<style>
.icon {
  transition: color 0.2s ease;
  width: 2.5rem !important;
  height: 2.5rem !important;
  color: var(--color-text-muted);
}
.icon:hover {
  color: var(--color-orange-500);
}
</style>
