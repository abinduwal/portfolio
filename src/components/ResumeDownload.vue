<script setup lang="ts">
import AppButton from './AppButton.vue';
</script>

<template>
  <section class="resume-band py-16 text-white">
    <div class="container narrow-section flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-skysoft">CV Download</p>
        <h2 class="mt-3 text-3xl font-semibold">Download my CV</h2>
        <p class="mt-3 max-w-2xl text-white/75">
          Download my CV for a quick overview of my experience, skills, education, and projects.
        </p>
      </div>
      <AppButton href="/Abin-Duwal-CV.pdf" download variant="secondary">Download CV</AppButton>
    </div>
  </section>
</template>
