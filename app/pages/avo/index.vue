<script setup lang="ts">
useSeoMeta({
  title: 'Avo — AI Nutrition Assistant',
  description:
    'An AI nutrition assistant for iOS and Android. Describe a meal in plain language; Avo returns macros, micronutrients, and allergen-aware analysis.',
})

definePageMeta({
  width: 'wide',
  footerLinks: [
    { to: '/avo/privacy', label: 'Privacy' },
    { to: '/avo/terms', label: 'Terms' },
  ],
})

const features = [
  {
    title: 'Plain-language meal logger',
    description:
      'Type what you ate in any wording. Avo returns a standardized food, serving size, and a full nutrient breakdown.',
  },
  {
    title: 'Daily dashboard',
    description:
      'Calories, protein, carbs, fat and key micronutrients tracked automatically against goals derived from your body stats.',
  },
  {
    title: 'Leftover Chef',
    description:
      "Turns what's left in your fridge into recipes that fit your remaining macros for the day.",
  },
  {
    title: 'Smart Swap',
    description:
      'Suggests healthier alternatives matched to your diet, allergies, and the macros you have room for.',
  },
  {
    title: 'Allergy &amp; condition aware',
    description:
      'Every meal is cross-referenced with your allergens and chronic conditions. Conflicts surface as a visible warning before they reach your log.',
  },
  {
    title: 'Private by default',
    description:
      'Profile and meal logs live in a Postgres database protected by row-level security. Only you can read your data.',
  },
]
</script>

<template>
  <main class="avo">
    <AppHero
      :icon="`/avo/icon.png`"
      title="Avo"
      meta="iOS · Android — Coming 2026"
      lead="An AI nutrition assistant. Describe a meal in plain language and Avo returns macros, micronutrients, and allergen-aware analysis."
    >
      <StoreButtons
        ios="https://apps.apple.com/app/avo"
        android="https://play.google.com/store/apps/details?id=app.avo.ai"
        primary="ios"
      />
    </AppHero>

    <section class="block">
      <SectionHeader label="Features" />
      <FeatureList :features="features" />
    </section>

    <section class="block">
      <SectionHeader label="Pricing" />
      <div class="pricing">
        <div class="pricing-main">
          <span class="price">$9.99<span class="price-unit"> / month</span></span>
          <p class="price-sub">First month free. Cancel any time from the App Store or Google Play subscription settings.</p>
        </div>
        <ul class="includes">
          <li>Unlimited AI meal analyses</li>
          <li>Full history &amp; trends</li>
          <li>Leftover Chef &amp; Smart Swap</li>
          <li>Allergy &amp; condition checks</li>
        </ul>
      </div>
    </section>

    <section class="block">
      <SectionHeader label="Disclaimer" />
      <div class="disclaimer">
        <p class="disclaimer-lead">AI results are estimates, not measurements.</p>
        <p>
          Avo uses a large language model to estimate the nutritional content of meals
          you describe. Every calorie, macro, and micronutrient value is an
          <em>approximation</em> generated from average data — not measured in a lab.
        </p>
        <ul class="points">
          <li>Real serving sizes, brands, cooking methods, and ingredients can shift values significantly.</li>
          <li>Allergen and condition checks are best-effort warnings, not a substitute for reading the label.</li>
          <li>Avo is not a medical device and does not diagnose, treat, or replace a doctor or registered dietitian.</li>
        </ul>
        <p class="disclaimer-foot">
          If you have an allergy, chronic condition, are pregnant, or under&nbsp;18, please
          consult a qualified health professional before acting on anything Avo tells you.
          Full <NuxtLink to="/avo/terms">Terms</NuxtLink> and
          <NuxtLink to="/avo/privacy">Privacy Policy</NuxtLink>.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.avo {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.block {
  padding: 64px 0;
  border-top: 1px solid var(--border);
}

.block:last-child {
  border-bottom: 1px solid var(--border);
}

/* Pricing */
.pricing {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  max-width: 720px;
}

.pricing-main {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.price {
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.025em;
  color: var(--text-primary);
  line-height: 1;
}

.price-unit {
  font-size: 15px;
  color: var(--text-secondary);
  font-weight: 400;
}

.price-sub {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 320px;
}

.includes {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 6px;
}

.includes li {
  font-size: 14px;
  color: var(--text-secondary);
  padding-left: 18px;
  position: relative;
  line-height: 1.6;
}

.includes li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 8px;
  height: 1px;
  background: var(--text-tertiary);
}

@media (max-width: 640px) {
  .pricing {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

/* Disclaimer */
.disclaimer {
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.disclaimer-lead {
  font-size: 17px !important;
  color: var(--text-primary) !important;
  font-weight: 500 !important;
  letter-spacing: -0.01em;
}

.disclaimer p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.disclaimer em {
  color: var(--text-primary);
  font-style: italic;
}

.points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 4px;
}

.points li {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.65;
  padding-left: 18px;
  position: relative;
}

.points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 11px;
  width: 8px;
  height: 1px;
  background: var(--text-tertiary);
}

.disclaimer-foot {
  font-size: 13px !important;
  color: var(--text-tertiary) !important;
  line-height: 1.65;
  padding-top: 8px;
}

.disclaimer-foot :deep(a) {
  color: var(--text-secondary);
  text-decoration: underline;
  text-decoration-color: var(--border-strong);
  transition: color 0.15s, text-decoration-color 0.15s;
}

.disclaimer-foot :deep(a:hover) {
  color: var(--text-primary);
  text-decoration-color: var(--text-primary);
}
</style>
