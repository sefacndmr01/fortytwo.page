<script setup lang="ts">
import type { LegalSection as LegalSectionType } from '~/composables/legal'

defineProps<{
  section: LegalSectionType
  appName: string
}>()
</script>

<template>
  <section :class="section.callout ? `callout-${section.callout}` : ''">
    <h2>{{ section.title }}</h2>

    <p v-if="section.content" v-html="section.content" />

    <template v-if="section.subsections">
      <div v-for="sub in section.subsections" :key="sub.title" class="subsection">
        <h3>{{ sub.title }}</h3>
        <p v-if="sub.content" v-html="sub.content" />
        <ul v-if="sub.list">
          <li v-for="item in sub.list" :key="item" v-html="item" />
        </ul>
        <p v-if="sub.note" class="note">{{ sub.note }}</p>
      </div>
    </template>

    <ul v-if="section.list && !section.subsections">
      <li v-for="item in section.list" :key="item" v-html="item" />
    </ul>

    <p v-if="section.note && !section.subsections" class="note">{{ section.note }}</p>

    <table v-if="section.table">
      <thead>
        <tr>
          <th>Service</th>
          <th>Purpose</th>
          <th>Data Shared</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in section.table" :key="row.service">
          <td>{{ row.service }}</td>
          <td>{{ row.purpose }}</td>
          <td v-html="row.data" />
        </tr>
      </tbody>
    </table>

    <div v-if="section.contact" class="contact-block">
      <div><span class="label">Email</span><a href="mailto:info@fortytwo.page">info@fortytwo.page</a></div>
      <div><span class="label">App</span><span>{{ appName }}</span></div>
      <div><span class="label">Operator</span><span>Fortytwo Apps</span></div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 32px 0;
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

section.callout-danger {
  border-left: 2px solid #b23a48;
  padding-left: 20px;
  margin: 8px 0;
  background: rgba(178, 58, 72, 0.04);
}

section.callout-danger h2 {
  color: #e58a93;
}

section.callout-mute {
  border-left: 2px solid var(--border);
  padding-left: 20px;
  background: var(--surface);
}

h2 {
  font-size: 16px;
  font-weight: 500;
  color: var(--accent);
}

p {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.7;
}

p :deep(.inline-link) {
  color: var(--text);
  text-decoration: underline;
  text-decoration-color: #444;
}

p :deep(.inline-link:hover) {
  text-decoration-color: var(--text);
}

.subsection {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 8px;
}

h3 {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

ul {
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

ul li {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.6;
}

.note {
  font-size: 12px;
  color: #555;
  font-style: italic;
  line-height: 1.6;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

th, td {
  padding: 10px 14px;
  text-align: left;
  border: 1px solid var(--border);
  vertical-align: top;
}

th {
  font-weight: 500;
  color: var(--text);
  background: var(--surface);
}

td {
  color: var(--muted);
  line-height: 1.55;
}

.contact-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-block > div {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
}

.label {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #555;
  min-width: 64px;
}

.contact-block a {
  color: var(--muted);
  transition: color 0.15s;
}

.contact-block a:hover {
  color: var(--text);
}
</style>
