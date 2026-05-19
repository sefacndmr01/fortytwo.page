<script setup lang="ts">
import type { LegalSection } from '~/composables/legal'

useSeoMeta({
  title: 'Privacy Policy — Nyx Clock',
})

definePageMeta({
  width: 'narrow',
  back: { to: '/nyxclock', label: 'Nyx Clock' },
})

const sections: LegalSection[] = [
  {
    title: '1. Summary',
    content:
      'Nyx Clock is designed with privacy in mind. We do <strong>not</strong> collect, store, or share your personal data. All app settings and preferences are stored <strong>locally on your device only</strong>.',
  },
  {
    title: '2. Data We Collect',
    subsections: [
      {
        title: '2.1 Data Stored Locally (On Your Device)',
        content:
          'The following data is saved on your device using local storage and is <strong>never transmitted</strong> to us or any third party:',
        list: [
          'Selected clock face and visual preferences',
          'Customization settings (font, color, size, etc.)',
          'App language preference',
        ],
        note: 'Stored via AsyncStorage. Cleared when you uninstall the app.',
      },
      {
        title: '2.2 Location Data (Optional — Weather Feature)',
        content:
          'If you enable the weather display feature, the app requests your location solely to fetch local weather conditions.',
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
    content:
      'Nyx Clock is available as a <strong>one-time purchase</strong> through Google Play Store. All payment transactions are handled entirely by Google Play. We do not receive or store any payment or billing information.',
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
    title: "5. Children's Privacy",
    content:
      'Nyx Clock does not knowingly collect any data from children under the age of 13. The app contains no user accounts, social features, or data collection mechanisms.',
  },
  {
    title: '6. Data Security',
    content:
      'Since all data is stored locally on your device and we do not operate any servers or databases, there is no risk of a server-side data breach. Your preferences remain entirely under your control.',
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
    content:
      'We may update this Privacy Policy from time to time. Any changes will be reflected with an updated "Last updated" date at the top of this page. Continued use of the app after changes constitutes acceptance of the updated policy.',
  },
  {
    title: '9. Contact',
    contact: true,
  },
]
</script>

<template>
  <LegalDocument
    title="Privacy Policy"
    updated="May 6, 2026"
    app-name="Nyx Clock"
    :sections="sections"
  />
</template>
