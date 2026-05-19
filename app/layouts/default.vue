<script setup lang="ts">
const route = useRoute()

const width = computed<'wide' | 'narrow'>(() => {
  return (route.meta.width as 'wide' | 'narrow') ?? 'wide'
})

const back = computed(() => route.meta.back ?? null)
const meta = computed(() => (route.meta.meta as string | undefined) ?? null)
const footerLinks = computed(
  () => (route.meta.footerLinks as { to: string, label: string }[]) ?? [],
)

const containerStyle = computed(() => {
  if (width.value === 'narrow') {
    return { '--container-max': '720px', '--container-pad': '24px' } as Record<string, string>
  }
  return { '--container-max': '860px', '--container-pad': '32px' } as Record<string, string>
})
</script>

<template>
  <div class="root" :style="containerStyle">
    <AppHeader :back="(back as any)" :meta="meta" />
    <div class="page">
      <slot />
    </div>
    <AppFooter :links="footerLinks" />
  </div>
</template>

<style scoped>
.root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: clip;
}

.page {
  flex: 1;
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad);
  display: flex;
  flex-direction: column;
}
</style>
