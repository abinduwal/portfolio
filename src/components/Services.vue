<script setup lang="ts">
import SectionTitle from './SectionTitle.vue';
import { services } from '../data/services';
</script>

<template>
  <section id="services" class="section">
    <div class="container narrow-section">
      <SectionTitle
        eyebrow="Services"
        title="Development services"
        description="Support for businesses, organizations, and teams that need maintainable web systems."
      />
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="service in services" :key="service.title" class="service-item">
          <div class="service-icon" aria-hidden="true"></div>
          <h3 class="text-lg font-semibold text-white">{{ service.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-white/75">{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
