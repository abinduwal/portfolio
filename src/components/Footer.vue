<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <footer class="site-footer">
    <div class="footer-signal" aria-hidden="true">
      <svg viewBox="0 0 420 24" preserveAspectRatio="none">
        <path d="M0 13 C 70 2, 120 23, 190 11 S 310 3, 420 12" />
      </svg>
    </div>

    <div class="container footer-thin">
      <span class="footer-name">
        {{ profile.name }}
        <span>{{ profile.title }}</span>
      </span>
      <span class="footer-divider" aria-hidden="true"></span>
      <a :href="profile.linkedin" class="footer-link" target="_blank" rel="noreferrer" aria-label="Open Abin Duwal LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 10v8" />
          <path d="M7 6v.01" />
          <path d="M11 18v-8" />
          <path d="M11 14c0-2.2 1.4-4 3.6-4 2.1 0 3.4 1.5 3.4 4v4" />
        </svg>
        LinkedIn
      </a>
      <a v-if="profile.upwork" :href="profile.upwork" class="footer-link" target="_blank" rel="noreferrer" aria-label="Open Abin Duwal Upwork profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 8v5.5a3.5 3.5 0 0 0 7 0V8" />
          <path d="M13 12.5c1.8-3 3.9-4.1 5.6-3.1 1.6 1 1.6 3.4.2 4.6-1.3 1.1-3.4.8-5.1-.9" />
        </svg>
        Upwork
      </a>
      <a v-if="profile.instagram" :href="profile.instagram" class="footer-link footer-social-optional" target="_blank" rel="noreferrer" aria-label="Open Abin Duwal Instagram profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="5" width="14" height="14" rx="4" />
          <circle cx="12" cy="12" r="3.3" />
          <path d="M16.7 7.4v.01" />
        </svg>
        Instagram
      </a>
      <a :href="`mailto:${profile.email}`" class="footer-link footer-email" aria-label="Email Abin Duwal">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
        {{ profile.email }}
      </a>
      <span class="footer-domain">{{ profile.domain }}</span>
      <span class="footer-copy">&copy; 2026</span>
    </div>
  </footer>
</template>
