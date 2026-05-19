<script setup lang="ts">
interface Feature {
  title: string
  description: string
}

defineProps<{
  features: Feature[]
}>()
</script>

<template>
  <ul class="features">
    <li v-for="f in features" :key="f.title" class="feature">
      <h3>{{ f.title }}</h3>
      <p>{{ f.description }}</p>
    </li>
  </ul>
</template>

<style scoped>
.features {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--border);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.feature {
  background: var(--bg);
  padding: 32px 32px 32px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.feature:nth-child(odd) {
  padding-right: 32px;
}

.feature:nth-child(even) {
  padding-left: 32px;
  padding-right: 0;
}

h3 {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  letter-spacing: -0.005em;
}

p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.65;
}

@media (max-width: 640px) {
  .features {
    grid-template-columns: 1fr;
  }
  .feature,
  .feature:nth-child(odd),
  .feature:nth-child(even) {
    padding: 28px 0;
  }
}
</style>
