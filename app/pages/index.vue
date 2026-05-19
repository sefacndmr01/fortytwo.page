<script setup lang="ts">
useSeoMeta({
  title: 'Fortytwo',
  description: 'Independent software studio. Mobile apps, AI products, web applications, and streaming technology.',
})

definePageMeta({ width: 'wide' })

const products = [
  {
    slug: 'chibi',
    name: 'Chibi Studio',
    platforms: 'iOS · Android',
    year: '2025',
    icon: `/chibi/icon.png`,
    to: '/chibi',
    description: 'Turn any photo into a chibi character. Upload a portrait and our AI generates an anime-style illustration, with a growing library of styles to choose from.',
    highlights: ['AI photo generation', 'Dozens of styles', 'Instant export', 'Your gallery'],
  },
  {
    slug: 'avo',
    name: 'Avo',
    platforms: 'iOS · Android',
    status: 'Coming 2026',
    icon: `/avo/icon.png`,
    to: '/avo',
    description: 'An AI nutrition assistant. Describe what you ate in plain language — Avo returns macros, micronutrients, allergen checks, and meal suggestions.',
    highlights: ['AI meal logging', 'Macros & micros', 'Allergen checks', 'Leftover Chef'],
  },
  {
    slug: 'nyxclock',
    name: 'Nyx Clock',
    platforms: 'Android',
    year: '2025',
    to: '/nyxclock',
    description: 'A bedside clock for nightstands and desks. Dozens of clock faces with full color customization and AMOLED-optimized dark themes.',
    highlights: ['Dozens of faces', 'AMOLED themes', 'Burn-in protection', 'One-time purchase'],
  },
]

const principles = [
  {
    title: 'Focused',
    body: 'One purpose per product. No feature bloat, no roadmap padding — only what the experience actually needs.',
  },
  {
    title: 'Considered',
    body: 'Every default, every interaction, every blank state is a decision. We treat the details as the work.',
  },
  {
    title: 'Independent',
    body: 'No investors, no exit strategy. We build software we\'d want to use ourselves, on our own terms.',
  },
]
</script>

<template>
  <main class="home">
    <section class="hero">
      <h1>Independent software studio.</h1>
      <p class="lead">Mobile apps, AI products, web applications, and streaming technology.</p>
    </section>

    <section id="work" class="section">
      <SectionHeader label="Work" />
      <div class="grid">
        <NuxtLink v-for="p in products" :key="p.slug" :to="p.to" class="card">
          <div class="card-top">
            <img v-if="p.icon" :src="p.icon" class="card-icon" :alt="`${p.name} icon`" width="52" height="52" />
            <div v-else class="card-icon card-icon--text"><span>{{ p.name[0] }}</span></div>
            <Icon name="lucide:arrow-up-right" size="15" class="card-arrow" />
          </div>
          <div class="card-body">
            <p class="card-name">{{ p.name }}</p>
            <p class="card-meta">
              {{ p.platforms }}
              <span v-if="p.status"> · {{ p.status }}</span>
              <span v-else-if="p.year"> · {{ p.year }}</span>
            </p>
          </div>
          <p class="card-desc">{{ p.description }}</p>
          <ul class="card-tags">
            <li v-for="tag in p.highlights" :key="tag">{{ tag }}</li>
          </ul>
        </NuxtLink>
      </div>
    </section>

    <section class="section section--border">
      <SectionHeader label="Studio" />
      <div class="studio-grid">
        <div class="studio-copy">
          <p>Fortytwo is an independent software studio building across mobile, AI, web, and OTT streaming. We design and develop products end-to-end — from concept to the App Store, the Play Store, and connected TV platforms.</p>
          <p>AI is a first-class discipline here: we build AI-native products where the model is the core experience, not a feature added after the fact.</p>
        </div>
        <dl class="studio-meta">
          <div class="meta-row">
            <dt>Platforms</dt>
            <dd>iOS · Android · Web · OTT · AI</dd>
          </div>
          <div class="meta-row">
            <dt>Model</dt>
            <dd>Independent studio</dd>
          </div>
          <div class="meta-row">
            <dt>Contact</dt>
            <dd><a href="mailto:info@fortytwo.page">info@fortytwo.page</a></dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="section section--border">
      <SectionHeader label="Approach" />
      <div class="principles">
        <div v-for="p in principles" :key="p.title" class="principle">
          <p class="principle-title">{{ p.title }}</p>
          <p class="principle-body">{{ p.body }}</p>
        </div>
      </div>
    </section>

    <section class="section section--border section--last">
      <SectionHeader label="Contact" />
      <div class="contact">
        <p class="contact-lead">Have a project in mind?<br>Let's talk.</p>
        <a href="mailto:info@fortytwo.page" class="contact-link">
          info@fortytwo.page
          <Icon name="lucide:arrow-right" size="14" />
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Hero */
.hero {
  padding: 100px 0 80px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

h1 {
  font-size: clamp(34px, 5vw, 50px);
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--text-primary);
}

.lead {
  font-size: 15px;
  color: var(--text-tertiary);
  letter-spacing: -0.005em;
}

/* Sections */
.section {
  padding: 56px 0;
}

.section--border {
  border-top: 1px solid var(--border);
}

.section--last {
  padding-bottom: 96px;
}

/* Cards grid — breaks out of container */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin-top: 28px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  width: min(calc(100vw - 48px), 1200px);
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: var(--bg-elevated);
  color: inherit;
  transition: background 0.18s ease;
}

.card:hover {
  background: var(--bg-elevated-hover);
}

.card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.card-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  border: 1px solid var(--border);
  display: block;
}

.card-icon--text {
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon--text span {
  font-size: 18px;
  font-weight: 500;
  color: var(--text-primary);
}

.card-arrow {
  color: var(--text-faint);
  transition: transform 0.2s ease, color 0.15s ease;
  flex-shrink: 0;
}

.card:hover .card-arrow {
  color: var(--text-secondary);
  transform: translate(2px, -2px);
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.card-name {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.015em;
  color: var(--text-primary);
  line-height: 1.2;
}

.card-meta {
  font-size: 12px;
  color: var(--text-tertiary);
  letter-spacing: 0.01em;
}

.card-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.65;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  list-style: none;
  margin-top: 4px;
}

.card-tags li {
  font-size: 11px;
  color: var(--text-faint);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 2px 8px;
  letter-spacing: 0.01em;
}

/* Studio */
.studio-grid {
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 56px;
  margin-top: 32px;
}

.studio-copy {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.studio-copy p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
}

.studio-meta {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-top: 2px;
}

.meta-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-row dt {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-faint);
}

.meta-row dd {
  font-size: 13px;
  color: var(--text-secondary);
}

.meta-row a {
  color: var(--text-secondary);
  transition: color 0.15s ease;
}

.meta-row a:hover {
  color: var(--text-primary);
}

/* Approach */
.principles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin-top: 32px;
  border-top: 1px solid var(--border);
}

.principle {
  padding: 28px 28px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.principle:not(:first-child) {
  padding-left: 28px;
  border-left: 1px solid var(--border);
}

.principle-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.principle-body {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.65;
}

/* Contact */
.contact {
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-lead {
  font-size: clamp(24px, 3.2vw, 34px);
  font-weight: 400;
  letter-spacing: -0.025em;
  line-height: 1.2;
  color: var(--text-primary);
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.15s ease;
}

.contact-link:hover {
  color: var(--text-primary);
}

.contact-link :deep(svg) {
  transition: transform 0.2s ease;
}

.contact-link:hover :deep(svg) {
  transform: translateX(3px);
}

/* Responsive */
@media (max-width: 680px) {
  .grid {
    grid-template-columns: 1fr;
    border-radius: 12px;
    width: calc(100vw - 32px);
  }

  .studio-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .principles {
    grid-template-columns: 1fr;
  }

  .principle {
    padding: 20px 0 0;
    border-left: none !important;
  }

  .principle:not(:first-child) {
    padding-left: 0;
  }
}

@media (max-width: 520px) {
  .hero {
    padding: 68px 0 52px;
  }

  .section {
    padding: 48px 0;
  }

  .section--last {
    padding-bottom: 64px;
  }
}
</style>
