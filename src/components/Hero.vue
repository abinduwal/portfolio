<script setup lang="ts">
import AppButton from './AppButton.vue';
import { profile } from '../data/profile';
</script>

<template>
  <section id="home" class="hero-section">
    <div class="container hero-container">
      <div class="hero-cover" aria-label="Portfolio cover">
        <img class="hero-avatar" src="/hero-developer.png" alt="Stylized developer illustration behind a laptop" />
        <div class="hero-copy">
          <p class="hero-hello">Hello! I Am <span>{{ profile.name.split(' ')[0] }}</span></p>
          <p class="hero-role">A developer who</p>
          <h1>
            Builds practical
            <span>web systems</span>
            with clean code.
          </h1>
          <p class="hero-note">Because useful software should feel clear, stable, and easy to maintain.</p>
        </div>
      </div>

      <div class="hero-intro">
        <p class="eyebrow">{{ profile.secondaryTitle }}</p>
        <h2>I'm a {{ profile.title }}.</h2>
        <p>
          I build practical, secure, and database-driven web applications using PHP, Laravel, CodeIgniter, Vue.js, REST APIs,
          MySQL, Oracle, and modern web technologies.
        </p>
        <div class="hero-actions">
          <AppButton href="#projects">View Projects</AppButton>
          <AppButton href="/Abin-Duwal-CV.pdf" download variant="secondary">Download CV</AppButton>
          <AppButton href="#contact" variant="ghost">Contact Me</AppButton>
        </div>
        <div class="hero-strip" aria-label="Portfolio focus areas">
          <span>Laravel Backend</span>
          <span>Vue 3 Frontend</span>
          <span>PMIS / MIS Systems</span>
        </div>
      </div>
    </div>
  </section>
</template>
