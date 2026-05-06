<script setup>
useSeoMeta({
  title: 'Privacy Policy — Nyx Clock',
})

const sections = [
  {
    title: '1. Summary',
    content: 'Nyx Clock is designed with privacy in mind. We do <strong>not</strong> collect, store, or share your personal data. All app settings and preferences are stored <strong>locally on your device only</strong>.',
  },
  {
    title: '2. Data We Collect',
    subsections: [
      {
        title: '2.1 Data Stored Locally (On Your Device)',
        content: 'The following data is saved on your device using local storage and is <strong>never transmitted</strong> to us or any third party:',
        list: [
          'Selected clock face and visual preferences',
          'Customization settings (font, color, size, etc.)',
          'App language preference',
        ],
        note: 'Stored via AsyncStorage. Cleared when you uninstall the app.',
      },
      {
        title: '2.2 Location Data (Optional — Weather Feature)',
        content: 'If you enable the weather display feature, the app requests your location solely to fetch local weather conditions.',
        list: [
          'Location is used in real-time to request weather information',
          'We use Open-Meteo (open-meteo.com), a privacy-friendly open-source weather API',
          'Your coordinates go directly to Open-Meteo — we do not receive, log, or store them',
          'Location access is optional — the app works fully without it',
          'You can revoke permission at any time via device settings',
        ],
      },
      {
        title: '2.3 Data We Do NOT Collect',
        list: [
          'No personal information (name, email, phone number)',
          'No account or login required',
          'No usage analytics or behavioral tracking',
          'No advertising identifiers',
          'No crash reporting services',
          'No third-party SDKs that collect data',
        ],
      },
    ],
  },
  {
    title: '3. Purchase & Payments',
    content: 'Nyx Clock is available as a <strong>one-time purchase</strong> through Google Play Store. All payment transactions are handled entirely by Google Play. We do not receive or store any payment or billing information.',
  },
  {
    title: '4. Third-Party Services',
    table: [
      { service: 'Google Play', purpose: 'App distribution & purchase', data: 'Handled by Google' },
      { service: 'Open-Meteo', purpose: 'Weather data (optional)', data: 'Approximate location (if enabled)' },
      { service: 'Google Fonts', purpose: 'Typefaces bundled at build time', data: 'None (no runtime requests)' },
    ],
  },
  {
    title: '5. Children\'s Privacy',
    content: 'Nyx Clock does not knowingly collect any data from children under the age of 13. The app contains no user accounts, social features, or data collection mechanisms.',
  },
  {
    title: '6. Data Security',
    content: 'Since all data is stored locally on your device and we do not operate any servers or databases, there is no risk of a server-side data breach. Your preferences remain entirely under your control.',
  },
  {
    title: '7. Your Rights',
    list: [
      '<strong>Access & Deletion:</strong> Uninstalling the app removes all locally stored data',
      '<strong>Location:</strong> Revoke permission at any time in device Settings → Apps → Nyx Clock → Permissions',
      '<strong>Contact:</strong> For any privacy-related questions, contact us at the address below',
    ],
  },
  {
    title: '8. Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. Any changes will be reflected with an updated "Last updated" date at the top of this page. Continued use of the app after changes constitutes acceptance of the updated policy.',
  },
  {
    title: '9. Contact',
    contact: true,
  },
]
</script>

<template>
  <div class="page">
    <header>
      <NuxtLink to="/nyxclock" class="back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Nyx Clock
      </NuxtLink>
    </header>

    <main>
      <div class="doc-header">
        <h1>Privacy Policy</h1>
        <p class="updated">Last updated: May 6, 2026</p>
      </div>

      <div class="doc-body">
        <template v-for="section in sections" :key="section.title">
          <section>
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
                  <td>{{ row.data }}</td>
                </tr>
              </tbody>
            </table>

            <div v-if="section.contact" class="contact-block">
              <div><span class="label">Email</span><a href="mailto:info@fortytwo.page">info@fortytwo.page</a></div>
              <div><span class="label">App</span><span>Nyx Clock</span></div>
            </div>
          </section>
        </template>
      </div>
    </main>

    <footer>
      <span>© 2026 Fortytwo Apps</span>
    </footer>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px;
}

header {
  display: flex;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid var(--border);
}

.back {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--muted);
  transition: color 0.15s;
}

.back:hover {
  color: var(--text);
}

main {
  flex: 1;
  padding: 64px 0 80px;
}

.doc-header {
  margin-bottom: 56px;
}

.doc-header h1 {
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.updated {
  font-size: 13px;
  color: var(--muted);
}

.doc-body {
  display: flex;
  flex-direction: column;
  gap: 0;
}

section {
  padding: 32px 0;
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 14px;
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
}

th {
  font-weight: 500;
  color: var(--text);
  background: var(--surface);
}

td {
  color: var(--muted);
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
  min-width: 48px;
}

.contact-block a {
  color: var(--muted);
  transition: color 0.15s;
}

.contact-block a:hover {
  color: var(--text);
}

footer {
  display: flex;
  align-items: center;
  height: 60px;
  border-top: 1px solid var(--border);
  font-size: 13px;
  color: var(--muted);
}
</style>
