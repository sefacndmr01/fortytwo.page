<script setup lang="ts">
useSeoMeta({
  title: 'Retrace — Spatial Memory Puzzle',
  description:
    'Watch the path light up, then retrace it from memory before the signal fades. A fast, escalating memory puzzle for Android with hints, streaks, and daily challenges.',
})

definePageMeta({
  width: 'wide',
  footerLinks: [{ to: '/retrace/privacy', label: 'Privacy' }],
})

const features = [
  {
    title: 'Watch, then retrace',
    description:
      'A path lights up tile by tile across the grid. Memorize it, then tap it back out from memory before you can second-guess yourself.',
  },
  {
    title: 'Escalating grids',
    description:
      'Boards grow from a gentle 4x4 up to a punishing 9x9 as you climb, with longer paths and faster reveals at every tier.',
  },
  {
    title: 'Combo & streak scoring',
    description:
      'Quick, accurate taps chain into rising multipliers. Rhythm is rewarded as much as memory.',
  },
  {
    title: 'Hints & replays',
    description:
      'Stuck on a level? Spend a hint to reveal the next tile, or a replay to see the path again — earn both from daily and weekly challenges, or watch a quick ad for more.',
  },
  {
    title: 'Daily & weekly challenges',
    description:
      'Simple in-app challenges reward hint and replay tokens and keep a run going without requiring a purchase.',
  },
  {
    title: 'Achievements & signal',
    description:
      'Dozens of achievements track lifetime stats — tiles traced, mistakes survived, streaks kept alive — with an optional Google Play Games link to carry your profile across devices.',
  },
]
</script>

<template>
  <main class="retrace">
    <AppHero
      icon="/retrace/icon.png"
      title="Retrace"
      meta="Android — 2026"
      lead="A signal is fading through the dark. Watch the path it leaves behind, then retrace it from memory before it's gone."
    >
      <StoreButtons android="https://play.google.com/store/apps/details?id=retrace.fortytwo.games" primary="android" />
    </AppHero>

    <section class="block">
      <SectionHeader label="Screens" />
      <div class="gallery">
        <img src="/retrace/screenshot-menu.png" alt="Retrace menu and shop screen" loading="lazy" />
        <img src="/retrace/screenshot-gameplay.png" alt="Retrace gameplay, tracing a path on the grid" loading="lazy" />
        <img src="/retrace/screenshot-complete.png" alt="Retrace level complete screen" loading="lazy" />
      </div>
    </section>

    <section class="block">
      <SectionHeader label="Features" />
      <FeatureList :features="features" />
    </section>

    <section class="block block--last">
      <SectionHeader label="Monetization" />
      <p class="note">
        Retrace is free to play. Hint and replay tokens can be earned through play or purchased in small packs,
        and a one-time "Remove Ads" purchase turns off interstitial and rewarded ads for good. No subscriptions.
      </p>
    </section>
  </main>
</template>

<style scoped>
.retrace {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.block {
  padding: 64px 0;
  border-top: 1px solid var(--border);
}

.block--last {
  border-bottom: 1px solid var(--border);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 28px;
}

.gallery img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: #000;
}

.note {
  max-width: 640px;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 640px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .block {
    padding: 48px 0;
  }

  .gallery {
    grid-template-columns: 1fr;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
