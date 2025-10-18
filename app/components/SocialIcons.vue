<template>
    <div class="intro__socials flex gap-[2rem]">
          <NuxtLink
            to="https://www.linkedin.com/in/ali-joshany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon class="icon" />
          </NuxtLink>
          <NuxtLink
            to="https://github.com/AJoshany"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon class="icon" />
          </NuxtLink>
          <NuxtLink
            to="https://www.instagram.com/ali.joshany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon class="icon" />
          </NuxtLink>
    </div>
</template>
<script setup>
import LinkedinIcon from "~/assets/icons/linkedin-icon.svg";
import InstagramIcon from "~/assets/icons/instagram-icon.svg";
import GithubIcon from "~/assets/icons/github-icon.svg";
</script>

<style>
.icon {
  transition: all 0.3s ease;
  width: 2.5rem !important;
  height: 2.5rem !important;
  cursor: pointer;
}
.icon:hover {
  color: var(--color-orange-500);
}
</style>