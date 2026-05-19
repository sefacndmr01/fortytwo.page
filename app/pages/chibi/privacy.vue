<script setup lang="ts">
import type { LegalSection } from '~/composables/legal'

useSeoMeta({
  title: 'Privacy Policy — Chibi Studio',
  description: 'Privacy Policy for Chibi Studio.',
})

definePageMeta({
  back: { to: '/chibi', label: 'Chibi Studio' },
})

const sections: LegalSection[] = [
  {
    title: '01. Information We Collect',
    subsections: [
      {
        title: 'Account data',
        content:
          'When you sign in with Google, we receive your display name and email address via Google Sign-In. We do not receive your Google password.',
      },
      {
        title: 'Photos',
        content:
          'When you submit a photo for chibi generation, the image is transmitted to our AI processing service. Your original photo is not stored on our servers after the generation process is complete.',
      },
      {
        title: 'Generated images',
        content:
          'The chibi images created by the App are stored in your account so you can access them later in your gallery.',
      },
      {
        title: 'Token balance',
        content:
          'We store the number of tokens associated with your account to manage access to generation features.',
      },
      {
        title: 'Purchase records',
        content:
          'We receive confirmation of in-app purchases from the App Store or Google Play to credit tokens to your account. We do not receive or store your payment card details.',
      },
      {
        title: 'Device information',
        content:
          'We may collect basic device identifiers and operating system version for diagnostic and crash-reporting purposes.',
      },
      {
        title: 'Usage data',
        content:
          'We collect anonymised usage metrics such as the number of generations performed to monitor service health and improve the App.',
      },
    ],
  },
  {
    title: '02. How We Use Your Information',
    list: [
      'To authenticate you and maintain your account session.',
      'To generate chibi artwork from the photo you submit.',
      'To store and display your generated images in your personal gallery.',
      'To credit your account with tokens after a verified purchase.',
      'To respond to support or account-related inquiries.',
      'To detect, investigate, and prevent abuse or fraudulent activity.',
      'To monitor and improve the performance and reliability of the App.',
    ],
    note: 'We do not use your information for advertising, and we do not sell or rent your personal data to any third party.',
  },
  {
    title: '03. Legal Basis for Processing (GDPR)',
    content:
      'If you are located in the European Economic Area, our legal bases for processing your personal data are:',
    subsections: [
      {
        title: 'Contract performance',
        content:
          'Processing necessary to provide the App\'s features you have requested — account creation, image generation, and token management.',
      },
      {
        title: 'Legitimate interests',
        content:
          'Anonymised analytics to improve the service, security monitoring, and fraud prevention.',
      },
      {
        title: 'Legal obligation',
        content: 'Retaining transaction records as required by applicable law.',
      },
    ],
  },
  {
    title: '04. Data Storage and Security',
    content:
      'Your account data and generated images are stored on secure cloud infrastructure hosted in the United States. Data transfers from the EEA to the US are made under appropriate safeguards. We implement industry-standard technical and organisational measures to protect your data against unauthorised access, loss, or disclosure. However, no method of transmission over the Internet is 100% secure.',
  },
  {
    title: '05. Third-Party Services',
    content: 'The App uses the following third-party services, each with their own privacy policies:',
    list: [
      '<a class="inline-link" href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Sign-In</a> — authentication',
      '<a class="inline-link" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">Apple App Store</a> — iOS purchase processing',
      '<a class="inline-link" href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Play</a> — Android purchase processing',
      '<a class="inline-link" href="https://supabase.com/privacy" target="_blank" rel="noopener">Supabase</a> — account data and image storage',
      '<a class="inline-link" href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">RevenueCat</a> — subscription and purchase management',
    ],
  },
  {
    title: '06. Data Retention',
    content:
      'We retain your account data and generated images for as long as your account is active. If you request account deletion, we will delete your personal data within 30 days, except where we are required to retain records by law (e.g. transaction records for tax purposes, typically up to 7 years).',
  },
  {
    title: '07. Your Rights',
    content: 'Depending on your location, you may have the right to:',
    list: [
      '<strong>Access</strong> the personal data we hold about you.',
      '<strong>Correct</strong> inaccurate or incomplete data.',
      '<strong>Delete</strong> your account and associated personal data.',
      '<strong>Object</strong> to or restrict certain types of processing.',
      '<strong>Data portability</strong> — receive your data in a machine-readable format.',
    ],
    note: 'To exercise any of these rights, contact us at info@fortytwo.page. We will respond within 30 days.',
  },
  {
    title: '08. Children\'s Privacy',
    content:
      'The App is not directed to children under the age of 13, or under 16 where applicable under local law. We do not knowingly collect personal information from children below these ages. If you believe we have inadvertently collected such data, please contact us and we will delete it promptly.',
  },
  {
    title: '09. Changes to This Policy',
    content:
      'We may update this Privacy Policy from time to time. When we make material changes, we will update the "Last updated" date at the top of this page and, where appropriate, notify you via the App. Your continued use of the App after such changes constitutes acceptance of the updated policy.',
  },
  {
    title: '10. Contact',
    contact: true,
  },
]
</script>

<template>
  <LegalDocument
    title="Privacy Policy"
    updated="March 29, 2026"
    app-name="Chibi Studio"
    :sections="sections"
  />
</template>
