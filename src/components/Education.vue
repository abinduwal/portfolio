<script setup lang="ts">
import SectionTitle from './SectionTitle.vue';
import { education } from '../data/education';
</script>

<template>
  <section id="education" class="section">
    <div class="container narrow-section">
      <SectionTitle eyebrow="Education" title="Academic background" />
      <div class="mt-10 grid gap-5">
        <article v-for="item in education" :key="item.displayTitle" class="card">
          <p class="text-sm font-semibold uppercase tracking-wide text-accent">{{ item.degree }}</p>
          <h3 class="mt-3 text-2xl font-semibold text-white">{{ item.displayTitle }}</h3>
          <p class="mt-2 text-white/75">{{ item.institution }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
