<script setup lang="ts">
import SectionTitle from './SectionTitle.vue';
import { otherWork } from '../data/otherWork';
</script>

<template>
  <section class="section">
    <div class="container narrow-section">
      <SectionTitle
        eyebrow="Additional Work"
        title="Other project experience"
        description="Smaller websites and items with unconfirmed technical scope are kept separate from the featured project set."
      />
      <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="item in otherWork" :key="item.title" class="compact-card">
          <span class="status-pill">{{ item.status }}</span>
          <h3 class="mt-4 text-lg font-semibold text-white">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-white/75">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
