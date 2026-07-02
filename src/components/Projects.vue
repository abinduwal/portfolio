<script setup lang="ts">
import SectionTitle from './SectionTitle.vue';
import ProjectCard from './ProjectCard.vue';
import { projects } from '../data/projects';

const featuredProjects = projects.filter((project) => project.featured);
</script>

<template>
  <section id="projects" class="section">
    <div class="container narrow-section">
      <SectionTitle
        eyebrow="Projects"
        title="Featured software and system work"
        description="Focused on meaningful backend, workflow, database, healthcare, CRM, and PMIS experience."
      />
      <div class="mt-10 grid gap-6 lg:grid-cols-2">
        <ProjectCard v-for="project in featuredProjects" :key="project.title" :project="project" />
      </div>
    </div>
  </section>
</template>
