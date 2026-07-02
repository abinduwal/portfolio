<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { profile } from '../data/profile';

const isOpen = ref(false);
const activeSection = ref('home');
const scrollProgress = ref(0);

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const closeMenu = () => {
  isOpen.value = false;
};

const sectionIds = computed(() => navItems.map((item) => item.href.slice(1)));

const updateScrollState = () => {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = documentHeight > 0 ? Math.min((scrollTop / documentHeight) * 100, 100) : 0;

  const sections = sectionIds.value
    .map((id) => ({ id, element: document.getElementById(id) }))
    .filter((item): item is { id: string; element: HTMLElement } => Boolean(item.element));

  const current = [...sections].reverse().find((item) => item.element.offsetTop <= scrollTop + 140);

  activeSection.value = current?.id ?? 'home';
};

onMounted(() => {
  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState);
});
</script>

<template>
  <header class="site-nav">
    <nav class="container nav-shell" aria-label="Primary navigation">
      <a href="#home" class="nav-brand" @click="closeMenu">
        <span class="brand-orbit" aria-hidden="true">
          <svg viewBox="0 0 48 48" role="img">
            <circle cx="24" cy="24" r="18" />
            <path d="M10 28c8-13 20-16 32-7" />
          </svg>
          <span class="brand-mark">AD</span>
        </span>
        <span class="brand-copy">
          <strong>{{ profile.name }}</strong>
          <small>{{ profile.title }}</small>
        </span>
      </a>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
        <span aria-hidden="true" class="relative block h-4 w-5">
          <span :class="['nav-line top-0', isOpen ? 'translate-y-2 rotate-45' : '']"></span>
          <span :class="['nav-line top-2', isOpen ? 'opacity-0' : '']"></span>
          <span :class="['nav-line top-4', isOpen ? '-translate-y-2 -rotate-45' : '']"></span>
        </span>
      </button>

      <div class="hidden items-center gap-1 md:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :class="['nav-link', activeSection === item.href.slice(1) ? 'is-active' : '']"
        >
          {{ item.label }}
        </a>
      </div>
    </nav>

    <div class="nav-progress" aria-hidden="true">
      <span :style="{ width: `${scrollProgress}%` }"></span>
    </div>

    <div v-show="isOpen" id="mobile-menu" class="mobile-menu md:hidden">
      <div class="container grid gap-1 py-4">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :class="['mobile-nav-link', activeSection === item.href.slice(1) ? 'is-active' : '']"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </header>
</template>
