<script setup lang="ts">
defineProps<{
  name: string
  platforms: string
  description: string
  to: string
  icon?: string
  year?: string
  status?: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="card">
    <div class="card-head">
      <div class="mark" :class="{ 'mark--text': !icon }">
        <img v-if="icon" :src="icon" :alt="`${name} icon`" width="56" height="56" />
        <span v-else>{{ name[0] }}</span>
      </div>
      <div class="titles">
        <h3>{{ name }}</h3>
        <p class="meta">
          {{ platforms }}<span v-if="status"> · {{ status }}</span><span v-else-if="year"> · {{ year }}</span>
        </p>
      </div>
    </div>

    <p class="description">{{ description }}</p>

    <div class="footer">
      <span class="visit">
        <span>Visit {{ name }}</span>
        <Icon name="lucide:arrow-right" size="14" />
      </span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--bg-elevated);
  color: inherit;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  position: relative;
}

.card:hover {
  border-color: var(--border-strong);
  background: var(--bg-elevated-hover);
}

.card:hover .visit :deep(svg) {
  transform: translateX(4px);
}

.card-head {
  display: flex;
  align-items: center;
  gap: 16px;
}

.mark {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  border: 1px solid var(--border);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0a;
}

.mark img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.mark--text {
  background: linear-gradient(135deg, #161616, #0a0a0a);
}

.mark--text span {
  font-size: 26px;
  font-weight: 500;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
}

.titles {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  flex: 1;
}

h3 {
  font-size: 22px;
  font-weight: 500;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.meta {
  font-size: 13px;
  color: var(--text-tertiary);
  letter-spacing: 0.01em;
  font-variant-numeric: tabular-nums;
}

.description {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.65;
  flex: 1;
}

.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
}

.visit {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
}

.visit :deep(svg) {
  transition: transform 0.2s ease;
}

@media (max-width: 520px) {
  .card {
    padding: 24px;
    gap: 16px;
  }
  .mark {
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }
  h3 {
    font-size: 20px;
  }
  .description {
    font-size: 14px;
  }
}
</style>
