<script setup lang="ts">
import type { LegalSection } from '~/composables/legal'

useSeoMeta({
  title: 'Privacy Policy — Avo',
})

definePageMeta({
  width: 'narrow',
  back: { to: '/avo', label: 'Avo', icon: '/avo/icon.png' },
  footerLinks: [
    { to: '/avo', label: 'Avo' },
    { to: '/avo/terms', label: 'Terms' },
  ],
})

const sections: LegalSection[] = [
  {
    title: '1. Summary',
    content:
      'Avo is an AI-powered diet and nutrition assistant. To deliver personal analyses we collect <strong>account data, body & lifestyle profile data, and the meal descriptions you log</strong>. All personal data is stored in a Supabase database under row-level security (only you can read your own rows). We do not sell your data, do not run ads, and do not share data with third parties beyond the processors strictly required to operate the service.',
  },
  {
    title: '2. Who We Are',
    content:
      'Avo is operated by <strong>Fortytwo Apps</strong>. For the purposes of GDPR and similar legislation, Fortytwo Apps is the data controller for the personal data processed through the Avo app and this website. You can contact us at the address in section 12.',
  },
  {
    title: '3. Data We Collect',
    subsections: [
      {
        title: '3.1 Account data',
        content: 'When you sign in with Google (and, in the future, Apple) we receive:',
        list: [
          'A unique user identifier issued by your identity provider',
          'Your email address',
          'Your display name (if your provider exposes one)',
          'Optionally, your profile picture URL',
        ],
        note: 'We do not receive your password — authentication is delegated to your identity provider.',
      },
      {
        title: '3.2 Profile data (you provide during onboarding)',
        content: 'To produce personalized nutrition analyses we ask you to enter:',
        list: [
          'Height, weight, age and sex',
          'Goal (lose, maintain or gain weight)',
          'Diet type (e.g. omnivore, vegetarian, vegan, keto, mediterranean)',
          'Food allergies',
          'Chronic conditions you choose to disclose (e.g. diabetes, hypertension)',
          'Preferred language',
          'Calorie target (calculated from your stats and editable)',
        ],
        note: 'Profile data is sensitive. We treat allergies and chronic conditions as health-related information and protect them accordingly. You can edit or remove any field at any time from the in-app profile screen.',
      },
      {
        title: '3.3 Meal log data',
        content: 'Each time you log a meal we store:',
        list: [
          'The free-text description you entered',
          'The structured nutrition analysis returned by the AI (calories, macros, micronutrients, warnings, coach message)',
          'A timestamp so the dashboard can roll up daily totals',
        ],
      },
      {
        title: '3.4 Subscription state',
        content:
          'Subscription purchases are processed by Apple App Store, Google Play and RevenueCat — we do not receive your card or bank details. From RevenueCat we receive only an <strong>entitlement flag</strong> indicating whether your premium subscription is active, plus the anonymous identifier (a Supabase user UUID) we send them to sync devices.',
      },
      {
        title: '3.5 Device & technical data',
        content: 'When the app talks to our backend it transmits standard technical information:',
        list: [
          'IP address (visible to our hosting provider for the duration of the request)',
          'Operating system, app version and request timestamps (used for debugging)',
          'A push-notification token, if you grant notification permission',
        ],
        note: 'We do not embed advertising SDKs, analytics SDKs, or third-party trackers in the app.',
      },
    ],
  },
  {
    title: '4. How We Use Your Data',
    list: [
      'To authenticate you and keep your session valid',
      'To compute calorie targets and personalize nutrition feedback',
      'To run AI analyses against the meals you submit',
      'To cross-check meals with your allergies and conditions and warn you on conflicts',
      'To display your historical dashboard and trends',
      'To enable, restore and verify your premium subscription',
      'To send meal reminders if you opted into notifications',
      'To investigate bugs, abuse or service-availability incidents',
      'To comply with legal obligations when required',
    ],
    note: 'We do not use your data for advertising and we do not sell or rent it.',
  },
  {
    title: '5. Legal Bases (GDPR)',
    content: 'Where GDPR applies, we rely on the following legal bases:',
    list: [
      '<strong>Contract</strong> — to provide the core service you signed up for (analyses, dashboard, subscription).',
      '<strong>Consent</strong> — for sensitive health-related fields (allergies, chronic conditions) and for push notifications. You may withdraw consent by removing the field or revoking the permission.',
      '<strong>Legitimate interest</strong> — for limited service-availability logging, fraud prevention and debugging.',
      '<strong>Legal obligation</strong> — when responding to lawful requests from authorities.',
    ],
  },
  {
    title: '6. Third-Party Processors',
    content: 'Avo relies on the following processors. Each receives only the data needed to perform its function.',
    table: [
      { service: 'Supabase', purpose: 'Authentication, database (PostgreSQL with row-level security), edge functions', data: 'Account, profile, meal logs, subscription entitlement, IP at request time' },
      { service: 'Google Sign-In', purpose: 'Identity provider', data: 'Sign-in handled by Google; we receive only the user ID, email and name' },
      { service: 'RevenueCat', purpose: 'Subscription state, receipt verification, restore', data: 'Your Supabase user UUID as anonymous app-user ID; subscription metadata' },
      { service: 'Apple App Store / Google Play', purpose: 'Payment processing &amp; receipt issuance', data: 'Handled by Apple / Google; we receive no card data' },
      { service: 'Expo Push / FCM / APNs', purpose: 'Delivering meal reminders (only if you opted in)', data: 'Anonymous push token; notification payload' },
    ],
    note: 'We do not share data with any party not listed above for the purpose of operating Avo.',
  },
  {
    title: '7. International Transfers',
    content:
      'Our processors operate globally and your data may be processed in regions outside your country of residence (including the United States and the European Union). Where transfers leave the EU/EEA we rely on the standard contractual clauses and the processor commitments published by each vendor.',
  },
  {
    title: '8. Data Retention',
    list: [
      '<strong>Account &amp; profile data</strong> — retained while your account is active.',
      '<strong>Meal logs</strong> — retained while your account is active so your dashboard and history remain meaningful.',
      '<strong>Subscription records</strong> — retained for as long as required by Apple, Google or local accounting / tax law (typically up to 10 years for transaction metadata).',
      '<strong>Backup snapshots</strong> — retained for up to 30 days after deletion before being permanently overwritten.',
    ],
  },
  {
    title: '9. Security',
    list: [
      'All connections to our backend use HTTPS / TLS.',
      'Authentication uses short-lived JWTs issued by Supabase Auth.',
      'Database access is governed by row-level security policies — each row is keyed to your user ID and other users (and unauthenticated requests) cannot read or write it.',
      'We minimize the data sent to the AI provider to what is required for a single analysis.',
    ],
    note: 'No system is perfectly secure. If we ever discover a breach affecting your data we will notify you and the competent authority as required by applicable law.',
  },
  {
    title: '10. Your Rights',
    content: 'Depending on where you live, you have the right to:',
    list: [
      '<strong>Access</strong> a copy of the personal data we hold about you.',
      '<strong>Correct</strong> inaccurate data — most fields are editable in-app.',
      '<strong>Delete</strong> your account and the associated data.',
      '<strong>Restrict</strong> or <strong>object</strong> to certain processing.',
      '<strong>Withdraw consent</strong> for processing based on consent.',
      '<strong>Lodge a complaint</strong> with your local data protection authority.',
    ],
    note: 'To exercise any of these rights, contact us at the address in section 12. We may ask you to verify ownership of the email associated with the account before acting on a request.',
  },
  {
    title: "11. Children's Privacy",
    content:
      'Avo is not directed to children under 13, and is not appropriate for users under 18 without the supervision of a parent, guardian, or qualified health professional. We do not knowingly collect personal data from children under 13. If you believe a child has provided us with personal data, contact us and we will delete it.',
  },
  {
    title: '12. Contact',
    contact: true,
  },
  {
    title: '13. Changes to This Policy',
    content:
      'We may update this Privacy Policy from time to time. Material changes will be reflected with a new "Last updated" date at the top of this page and, where required by law, communicated to you in-app. Continued use of Avo after changes take effect constitutes acceptance of the updated policy.',
  },
]
</script>

<template>
  <LegalDocument
    title="Privacy Policy"
    updated="May 18, 2026"
    app-name="Avo"
    :sections="sections"
  />
</template>
