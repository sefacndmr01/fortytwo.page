<script setup lang="ts">
interface BackLink {
  to: string
  label: string
}

defineProps<{
  back?: BackLink | null
}>()
</script>

<template>
  <header class="header">
    <div class="inner">
      <NuxtLink v-if="back" :to="back.to" class="back">
        <Icon name="lucide:arrow-left" size="14" />
        <span>{{ back.label }}</span>
      </NuxtLink>
      <NuxtLink v-else to="/" class="brand" aria-label="Fortytwo">
        <Logo />
      </NuxtLink>

      <nav v-if="!back" class="nav">
        <a href="#work" class="nav-link">Work</a>
        <a href="mailto:info@fortytwo.page" class="nav-link">Contact</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(6, 6, 6, 0.72);
  backdrop-filter: saturate(140%) blur(14px);
  -webkit-backdrop-filter: saturate(140%) blur(14px);
  border-bottom: 1px solid var(--border);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 64px;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.brand {
  display: inline-flex;
  align-items: center;
  color: var(--text-primary);
  opacity: 0.95;
  transition: opacity 0.15s ease;
}

.brand:hover {
  opacity: 1;
}

.brand :deep(svg) {
  display: block;
  width: auto;
  height: 20px;
}

.nav {
  display: flex;
  gap: 28px;
}

.nav-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.15s ease;
}

.nav-link:hover {
  color: var(--text-primary);
}

.back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.15s ease;
}

.back:hover {
  color: var(--text-primary);
}

@media (max-width: 520px) {
  .inner {
    height: 56px;
    padding: 0 20px;
  }
  .nav {
    gap: 18px;
  }
  .nav-link {
    font-size: 12px;
  }
}
</style>
