<script setup lang="ts">
defineProps<{
  href?: string;
  download?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
}>();
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :download="download ? '' : undefined"
    :class="['btn', `btn-${variant ?? 'primary'}`]"
  >
    <slot />
  </a>
  <button v-else :class="['btn', `btn-${variant ?? 'primary'}`]">
    <slot />
  </button>
</template>
