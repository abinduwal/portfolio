<script setup lang="ts">
import type { ProjectItem } from '../types/portfolio';

defineProps<{
  project: ProjectItem;
}>();
</script>

<template>
  <article class="project-card">
    <div class="flex flex-wrap items-center gap-2">
      <span class="status-pill">{{ project.status }}</span>
      <span class="text-sm font-medium text-white/70">{{ project.type }}</span>
    </div>
    <h3 class="mt-4 text-2xl font-semibold text-white">{{ project.title }}</h3>
    <p v-if="project.company" class="mt-1 text-sm font-medium text-accent">{{ project.company }}</p>
    <p class="mt-3 text-sm font-semibold uppercase tracking-wide text-white/70">{{ project.role }}</p>
    <p class="mt-4 leading-7 text-white/75">{{ project.description }}</p>

    <div class="mt-6">
      <h4 class="text-sm font-semibold uppercase tracking-wide text-white">Key features</h4>
      <ul class="mt-3 grid gap-2 text-sm leading-6 text-white/75">
        <li v-for="feature in project.features" :key="feature" class="flex gap-2">
          <span class="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>

    <div class="mt-6 flex flex-wrap gap-2">
      <span v-for="tech in project.techStack" :key="tech" class="tag tag-light">{{ tech }}</span>
    </div>

    <a v-if="project.link" :href="project.link" class="mt-6 inline-flex font-semibold text-accent" target="_blank" rel="noreferrer">
      View project
    </a>
  </article>
</template>
