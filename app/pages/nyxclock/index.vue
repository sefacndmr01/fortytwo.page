<script setup lang="ts">
useSeoMeta({
  title: 'Nyx Clock — Bedside Clock for Android',
  description:
    'A bedside clock for nightstands and desks. Dozens of customizable faces, AMOLED-friendly, one-time purchase.',
})

definePageMeta({
  width: 'wide',
  footerLinks: [{ to: '/nyxclock/privacy', label: 'Privacy' }],
})

const features = [
  {
    title: 'Dozens of clock faces',
    description: 'Digital, analog, flip, word clock, arc and more — with new faces added regularly.',
  },
  {
    title: 'Fully customizable',
    description: 'Font, color themes, weather, brightness — every face is fully yours.',
  },
  {
    title: 'Built for nightstands',
    description: 'AMOLED dark themes, burn-in protection, and ambient light awareness for overnight use.',
  },
  {
    title: 'One-time purchase',
    description: 'No subscriptions. No ads. Pay once, own forever.',
  },
]
</script>

<template>
  <main class="nyx">
    <AppHero
      title="Nyx Clock"
      meta="Android — Released 2025"
      lead="A bedside clock for nightstands and desks. Beautiful standby displays, made for overnight use."
    >
      <a
        href="https://play.google.com/store/apps/details?id=com.nyxclock.app"
        target="_blank"
        rel="noopener noreferrer"
        class="play-btn"
      >
        <Icon name="simple-icons:googleplay" size="16" />
        Get it on Google Play
      </a>
    </AppHero>

    <section class="block">
      <SectionHeader label="Features" />
      <FeatureList :features="features" />
    </section>
  </main>
</template>

<style scoped>
.nyx {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.block {
  padding: 64px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.play-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 18px;
  background: #fff;
  color: #000;
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
  transition: opacity 0.15s;
  width: fit-content;
}

.play-btn:hover {
  opacity: 0.88;
}
</style>
