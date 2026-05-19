<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  meta?: string
  lead?: string
}>()
</script>

<template>
  <section class="hero">
    <img
      v-if="icon"
      :src="icon"
      :alt="`${title} app icon`"
      class="hero-icon"
      width="72"
      height="72"
    />

    <div class="hero-title">
      <h1>{{ title }}</h1>
      <p v-if="meta" class="meta">{{ meta }}</p>
    </div>

    <p v-if="lead" class="lead">{{ lead }}</p>

    <div v-if="$slots.default" class="actions">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
  padding: 80px 0 64px;
}

.hero-icon {
  width: 72px;
  height: 72px;
  border-radius: 16px;
  border: 1px solid var(--border);
  margin-bottom: 4px;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

h1 {
  font-size: clamp(40px, 6.5vw, 56px);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.04;
  color: var(--text-primary);
  white-space: pre-line;
}

.meta {
  font-size: 13px;
  color: var(--text-secondary);
  letter-spacing: 0.01em;
  font-variant-numeric: tabular-nums;
}

.lead {
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 540px;
}

.actions {
  margin-top: 8px;
}

@media (max-width: 520px) {
  .hero {
    padding: 56px 0 48px;
    gap: 20px;
  }
  .hero-icon {
    width: 60px;
    height: 60px;
  }
}
</style>
