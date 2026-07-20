<script setup lang="ts">
import type { LegalSection } from '~/composables/legal'

useSeoMeta({
  title: 'Privacy Policy — Retrace',
  description: 'Privacy Policy for Retrace.',
})

definePageMeta({
  back: { to: '/retrace', label: 'Retrace' },
})

const sections: LegalSection[] = [
  {
    title: '1. Summary',
    content:
      'Retrace is a single-player puzzle game. We do not require an account and do not collect your name, email, or other personal information to play. Your progress and settings are stored <strong>locally on your device</strong>. The sections below explain the limited data handled by the ads, purchases, and optional account-linking features built into the game.',
  },
  {
    title: '2. Data Stored Locally (On Your Device)',
    content:
      'The following is saved on your device using local storage and is never transmitted to us:',
    list: [
      'Current level and grid progress',
      'Hint and replay token balances',
      'Achievement and lifetime stat progress (tiles traced, mistakes, streaks, and similar counters)',
      'Sound, haptics, and other in-game preferences',
    ],
    note: 'Cleared automatically when you uninstall the app.',
  },
  {
    title: '3. Advertising',
    content:
      'Retrace shows ads via <strong>Google AdMob</strong> — a rewarded ad you can choose to watch for extra hint or replay tokens, and an occasional interstitial ad between levels. AdMob may collect device identifiers (such as the advertising ID), IP address, and general device information to serve and measure ads, and — depending on your region and consent — to personalize them.',
    list: [
      'Ads are provided by Google and are subject to <a class="inline-link" href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google\'s Privacy Policy</a>',
      'You can turn ads off entirely with the one-time "Remove Ads" purchase (see §4)',
      'Ad personalization can be limited from your device\'s Google settings (Settings → Google → Ads)',
    ],
  },
  {
    title: '4. Purchases',
    content:
      'In-app purchases (hint/replay token packs and the "Remove Ads" lifetime unlock) are processed by <strong>Google Play</strong> and managed on our behalf by <strong>RevenueCat</strong>. We never see or store your payment card details.',
    list: [
      'RevenueCat receives an anonymous, app-generated user identifier and your purchase/receipt data to grant and restore entitlements across sessions',
      'Google Play handles all billing directly — see <a class="inline-link" href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google\'s Privacy Policy</a>',
      'RevenueCat\'s handling of this data is described in its <a class="inline-link" href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>',
    ],
  },
  {
    title: '5. Optional Google Play Games Link',
    content:
      'From Settings, you may optionally connect your Google Play Games account. This is entirely optional — the game is fully playable without it.',
    list: [
      'If you connect it, Retrace reads your Play Games player ID, display name, and avatar to show on your profile within the game',
      'This sign-in is handled by Google Play Games Services directly — we do not receive or store your Google password',
      'You can disconnect at any time from your device\'s Google Play Games settings',
    ],
  },
  {
    title: '6. Data We Do NOT Collect',
    list: [
      'No name, email address, or phone number',
      'No account or password stored on our servers — the game has no backend account system',
      'No photos, camera, or microphone access',
      'No location data',
      'No sale of personal data to third parties',
    ],
  },
  {
    title: '7. Third-Party Services',
    table: [
      { service: 'Google Play', purpose: 'App distribution & purchase processing', data: 'Handled by Google' },
      { service: 'Google AdMob', purpose: 'Rewarded & interstitial ads', data: 'Advertising ID, device info (see §3)' },
      { service: 'RevenueCat', purpose: 'Purchase & entitlement management', data: 'Anonymous user ID, purchase receipts' },
      { service: 'Google Play Games Services', purpose: 'Optional account link', data: 'Player ID, display name, avatar (if connected)' },
      { service: 'Google Fonts', purpose: 'Typefaces bundled at build time', data: 'None (no runtime requests)' },
    ],
  },
  {
    title: "8. Children's Privacy",
    content:
      'Retrace is not directed at children under the age of 13. We do not knowingly collect personal information from children. Ads served through AdMob are configured accordingly; if you believe a child has provided us with data, contact us and we will address it promptly.',
  },
  {
    title: '9. Data Security',
    content:
      'Your progress and preferences live on your device — we do not operate a backend that stores your personal data. The limited data shared with AdMob and RevenueCat is transmitted and processed under those providers\' own security practices, linked above.',
  },
  {
    title: '10. Your Rights',
    list: [
      '<strong>Access & Deletion:</strong> Uninstalling the app removes all locally stored data',
      '<strong>Ads:</strong> Purchase "Remove Ads" to stop ad requests, or adjust ad personalization in your device\'s Google settings',
      '<strong>Play Games link:</strong> Disconnect at any time via device Google Play Games settings',
      '<strong>Purchases:</strong> Manage or cancel subscriptions and view purchase history in Google Play',
      '<strong>Contact:</strong> For any privacy-related questions, contact us at the address below',
    ],
  },
  {
    title: '11. Changes to This Policy',
    content:
      'We may update this Privacy Policy from time to time. Any changes will be reflected with an updated "Last updated" date at the top of this page. Continued use of the app after changes constitutes acceptance of the updated policy.',
  },
  {
    title: '12. Contact',
    contact: true,
  },
]
</script>

<template>
  <LegalDocument
    title="Privacy Policy"
    updated="July 20, 2026"
    app-name="Retrace"
    :sections="sections"
  />
</template>
