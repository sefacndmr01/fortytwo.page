<script setup lang="ts">
import type { LegalSection as LegalSectionType } from '~/composables/legal'

defineProps<{
  title: string
  updated: string
  appName: string
  sections: LegalSectionType[]
}>()
</script>

<template>
  <main class="doc">
    <div class="doc-header">
      <h1>{{ title }}</h1>
      <p class="updated">Last updated: {{ updated }}</p>
    </div>
    <div class="doc-body">
      <LegalSection
        v-for="s in sections"
        :key="s.title"
        :section="s"
        :app-name="appName"
      />
    </div>
  </main>
</template>

<style scoped>
.doc {
  flex: 1;
  padding: 64px 0 80px;
}

.doc-header {
  margin-bottom: 56px;
}

.doc-header h1 {
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.updated {
  font-size: 13px;
  color: var(--muted);
}

.doc-body {
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>
