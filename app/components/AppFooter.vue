<script setup lang="ts">
interface FooterLink {
  to: string
  label: string
}

withDefaults(
  defineProps<{
    links?: FooterLink[]
  }>(),
  { links: () => [] },
)

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="inner">
      <div class="left">
        <span class="copyright">© {{ year }} Fortytwo</span>
        <nav v-if="links.length" class="nav">
          <NuxtLink v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</NuxtLink>
        </nav>
      </div>
      <a href="mailto:info@fortytwo.page" class="contact">info@fortytwo.page</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  margin-top: 96px;
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
  font-size: 13px;
  color: var(--text-secondary);
  font-variant-numeric: tabular-nums;
}

.left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.copyright {
  color: var(--text-tertiary);
}

.nav {
  display: flex;
  gap: 18px;
}

.footer :deep(a) {
  color: var(--text-secondary);
  transition: color 0.15s ease;
}

.footer :deep(a:hover) {
  color: var(--text-primary);
}

@media (max-width: 520px) {
  .inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    height: auto;
    padding: 20px;
  }
  .left {
    gap: 16px;
  }
}
</style>
