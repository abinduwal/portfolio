<script setup lang="ts">
import type { ExperienceItem } from '../types/portfolio';

defineProps<{
  items: ExperienceItem[];
}>();
</script>

<template>
  <div class="relative mt-10 space-y-6">
    <article v-for="(item, index) in items" :key="`${item.company}-${item.duration}`" class="timeline-item">
      <div class="timeline-dot" aria-hidden="true"></div>
      <div :class="['timeline-card', index % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]']">
        <p class="text-sm font-semibold uppercase tracking-wide text-accent">{{ item.duration }}</p>
        <h3 class="mt-2 text-xl font-semibold text-white">{{ item.role }}</h3>
        <p class="mt-1 font-medium text-white/75">{{ item.company }}</p>
        <p class="mt-4 leading-7 text-white/75">{{ item.description }}</p>
        <div v-if="item.projects?.length" class="mt-4 flex flex-wrap gap-2">
          <span v-for="project in item.projects" :key="project" class="tag tag-light">{{ project }}</span>
        </div>
        <ul class="mt-5 grid gap-2 text-sm leading-6 text-white/75">
          <li v-for="responsibility in item.responsibilities" :key="responsibility" class="flex gap-2">
            <span class="mt-2 size-1.5 shrink-0 rounded-full bg-coral" aria-hidden="true"></span>
            <span>{{ responsibility }}</span>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>
