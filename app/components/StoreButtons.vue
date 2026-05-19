<script setup lang="ts">
withDefaults(
  defineProps<{
    ios?: string
    android?: string
    primary?: 'ios' | 'android'
  }>(),
  { primary: 'ios' },
)
</script>

<template>
  <div class="cta-row">
    <a
      v-if="ios"
      :href="ios"
      target="_blank"
      rel="noopener noreferrer"
      :class="['store-btn', primary === 'ios' && 'is-primary']"
    >
      <Icon name="simple-icons:apple" size="18" />
      App Store
    </a>
    <a
      v-if="android"
      :href="android"
      target="_blank"
      rel="noopener noreferrer"
      :class="['store-btn', primary === 'android' && 'is-primary']"
    >
      <Icon name="simple-icons:googleplay" size="18" />
      Google Play
    </a>
  </div>
</template>

<style scoped>
.cta-row {
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.store-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 18px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
  width: fit-content;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  transition: opacity 0.15s, background 0.15s;
}

.store-btn.is-primary {
  background: #fff;
  color: #000;
  border-color: #fff;
}

.store-btn:hover {
  opacity: 0.85;
}

.store-btn:not(.is-primary):hover {
  background: var(--surface);
}
</style>
