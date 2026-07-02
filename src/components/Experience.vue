<script setup lang="ts">
import SectionTitle from './SectionTitle.vue';
import ExperienceTimeline from './ExperienceTimeline.vue';
import { experiences } from '../data/experience';
</script>

<template>
  <section id="experience" class="section">
    <div class="container narrow-section">
      <SectionTitle
        eyebrow="Experience"
        title="Work Experience"
        description="Official job titles are preserved while the portfolio positioning remains Full Stack Developer."
      />
      <ExperienceTimeline :items="experiences" />
    </div>
  </section>
</template>
