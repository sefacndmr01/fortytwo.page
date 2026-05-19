<script setup lang="ts">
useSeoMeta({
  title: 'Chibi Studio — Turn Photos into Chibi Art',
  description:
    'Transform any photo into adorable chibi character art using AI. Choose your style, generate in seconds, and share. Available on iOS and Android.',
})

definePageMeta({
  width: 'wide',
  footerLinks: [
    { to: '/chibi/privacy', label: 'Privacy' },
    { to: '/chibi/terms', label: 'Terms' },
  ],
})

const features = [
  {
    title: 'Photo to chibi',
    description:
      'Upload any portrait and our AI transforms it into a cute chibi character that captures your likeness.',
  },
  {
    title: 'Dozens of styles',
    description:
      'Choose from a growing library of art styles — classic anime, modern cartoon, and more. New styles added regularly.',
  },
  {
    title: '2K resolution',
    description:
      'Export in crisp 2K resolution. Perfect for profile pictures, stickers, and prints.',
  },
  {
    title: 'Privacy first',
    description:
      'Your photos are processed securely and never stored on our servers after generation completes.',
  },
  {
    title: 'Your gallery',
    description:
      'Every creation saved to your personal gallery. Access and re-download your history any time.',
  },
  {
    title: 'Simple pricing',
    description:
      'Token-based. No subscription required — buy what you need and use it at your own pace.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Upload a photo',
    body: 'Pick any portrait from your gallery or take a new one with your camera.',
  },
  {
    step: '02',
    title: 'Choose a style',
    body: 'Select from our curated collection of chibi art styles to match your vibe.',
  },
  {
    step: '03',
    title: 'Download & share',
    body: 'Your chibi is ready in seconds. Save it to your library or share it instantly.',
  },
]
</script>

<template>
  <main class="chibi">
    <AppHero
      :icon="`/chibi/icon.png`"
      title="Chibi Studio"
      meta="iOS · Android — 2025"
      lead="Turn any photo into chibi art. Upload a portrait, choose a style, and get an AI-generated chibi character in seconds."
    >
      <StoreButtons
        android="https://play.google.com/store/apps/details?id=com.chibistudio.app"
        primary="android"
      />
    </AppHero>

    <section class="block">
      <SectionHeader label="Features" />
      <FeatureList :features="features" />
    </section>

    <section class="block block--last">
      <SectionHeader label="How it works" />
      <div class="steps">
        <div v-for="s in steps" :key="s.step" class="step">
          <span class="step-num">{{ s.step }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.body }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.chibi {
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

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--border);
  margin-top: 36px;
}

.step {
  padding: 32px 32px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.step:not(:first-child) {
  padding-left: 32px;
  border-left: 1px solid var(--border);
}

.step-num {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: var(--text-faint);
  font-variant-numeric: tabular-nums;
}

h3 {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.step p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.65;
}

@media (max-width: 640px) {
  .steps {
    grid-template-columns: 1fr;
  }

  .step {
    padding: 24px 0 0;
    border-left: none !important;
  }

  .step:not(:first-child) {
    padding-left: 0;
  }
}

@media (max-width: 520px) {
  .block {
    padding: 48px 0;
  }
}
</style>
