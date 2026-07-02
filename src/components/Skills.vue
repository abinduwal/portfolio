<script setup lang="ts">
import SectionTitle from './SectionTitle.vue';
import { skillGroups } from '../data/skills';
</script>

<template>
  <section id="skills" class="section">
    <div class="container narrow-section">
      <SectionTitle
        eyebrow="Skills"
        title="Technical skills and system knowledge"
        description="Grouped around the tools, frameworks, and systems used in professional project work."
      />
      <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <article v-for="group in skillGroups" :key="group.title" class="card">
          <h3 class="text-xl font-semibold text-white">{{ group.title }}</h3>
          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="skill in group.skills" :key="skill" class="tag">{{ skill }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
