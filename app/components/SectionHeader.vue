<script setup lang="ts">
defineProps<{
  label: string
  hint?: string
}>()
</script>

<template>
  <header class="section-head">
    <span class="label">{{ label }}</span>
    <span v-if="hint" class="hint">{{ hint }}</span>
  </header>
</template>

<style scoped>
.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 24px;
}

.label {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--text-primary);
}

.hint {
  font-size: 12px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
}
</style>
