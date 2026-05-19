<script setup lang="ts">
useSeoMeta({
  title: 'Data Download Request — Fortytwo',
  description: 'Request a copy of your personal data from Fortytwo apps.',
  robots: 'noindex, nofollow',
})

definePageMeta({
  back: { to: '/', label: 'Home' },
  width: 'narrow',
})

const APPS = ['Chibi Studio', 'Avo', 'Nyx Clock']

const form = reactive({
  app: 'Chibi Studio',
  email: '',
  notes: '',
})

const errors = reactive({
  email: '',
})

const touched = reactive({
  email: false,
})

const submitted = ref(false)
const loading = ref(false)
const serverError = ref('')

function validateEmail(value: string) {
  if (!value) return 'Email address is required.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.'
  return ''
}

function touchEmail() {
  touched.email = true
  errors.email = validateEmail(form.email)
}

watch(() => form.email, (val) => {
  if (touched.email) errors.email = validateEmail(val)
})

async function handleSubmit() {
  touched.email = true
  errors.email = validateEmail(form.email)
  if (errors.email) return

  loading.value = true
  serverError.value = ''

  try {
    await $fetch('/api/download-request', {
      method: 'POST',
      body: {
        app: form.app,
        email: form.email,
        reason: form.notes || undefined,
      },
    })
    submitted.value = true
  }
  catch {
    serverError.value = 'Something went wrong. Please try again or email us directly at info@fortytwo.page.'
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="wrap">
    <template v-if="!submitted">
      <div class="page-head">
        <h1>Data Download Request</h1>
        <p class="sub">
          Request a copy of the personal data we hold about you.
          We'll respond within 5 business days.
        </p>
      </div>

      <form class="form" novalidate @submit.prevent="handleSubmit">
        <!-- App -->
        <div class="field">
          <label class="label">App</label>
          <SelectBox v-model="form.app" :options="APPS" />
        </div>

        <!-- Email -->
        <div class="field">
          <label class="label" for="email">
            Email address
            <span class="badge badge--required">Required</span>
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="input"
            :class="{ 'input--error': errors.email }"
            placeholder="address@example.com"
            autocomplete="email"
            @blur="touchEmail"
          />
          <Transition name="err">
            <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
            <p v-else class="field-hint">Use the email associated with your account.</p>
          </Transition>
        </div>

        <!-- Notes -->
        <div class="field">
          <label class="label" for="notes">
            Notes
            <span class="badge">Optional</span>
          </label>
          <textarea
            id="notes"
            v-model="form.notes"
            class="textarea"
            placeholder="Any specific data you're looking for? (optional)"
            rows="4"
          />
        </div>

        <!-- Server error -->
        <Transition name="err">
          <p v-if="serverError" class="server-error">{{ serverError }}</p>
        </Transition>

        <div class="actions">
          <button
            type="submit"
            class="btn-submit"
            :disabled="loading"
          >
            <span v-if="loading" class="spinner" />
            {{ loading ? 'Sending…' : 'Submit request' }}
          </button>
        </div>
      </form>
    </template>

    <!-- Success -->
    <div v-else class="success">
      <div class="success-mark">
        <Icon name="lucide:check" size="18" />
      </div>
      <h2>Request received.</h2>
      <p>
        We'll contact you at <strong>{{ form.email }}</strong> within
        <strong>5 business days</strong> with a copy of your data
        for {{ form.app }}.
      </p>
      <p class="success-note">
        If you don't hear from us, reach us at
        <a href="mailto:info@fortytwo.page">info@fortytwo.page</a>.
      </p>
      <NuxtLink to="/" class="back-link">
        <Icon name="lucide:arrow-left" size="13" />
        Back to home
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.wrap {
  flex: 1;
  padding: 56px 0 96px;
  max-width: 480px;
}

.page-head {
  margin-bottom: 44px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

h1 {
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  line-height: 1.15;
}

.sub {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.65;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 7px;
}

.badge {
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--text-faint);
}

.badge--required {
  color: var(--text-tertiary);
}

.input,
.textarea {
  width: 100%;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 14px;
  color: var(--text-primary);
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s ease;
  resize: vertical;
}

.input::placeholder,
.textarea::placeholder {
  color: var(--text-faint);
}

.input:focus,
.textarea:focus {
  border-color: var(--border-strong);
}

.input--error {
  border-color: rgba(220, 80, 80, 0.5);
}

.input--error:focus {
  border-color: rgba(220, 80, 80, 0.75);
}

.field-hint {
  font-size: 12px;
  color: var(--text-tertiary);
  line-height: 1.5;
}

.field-error {
  font-size: 12px;
  color: #dc5050;
  line-height: 1.5;
}

.server-error {
  font-size: 13px;
  color: #dc5050;
  line-height: 1.6;
  padding: 12px 14px;
  border: 1px solid rgba(220, 80, 80, 0.25);
  border-radius: 8px;
  background: rgba(220, 80, 80, 0.05);
}

.actions {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 4px;
}

.btn-submit {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--text-primary);
  color: var(--bg);
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.btn-submit:hover:not(:disabled) {
  opacity: 0.85;
}

.btn-submit:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.spinner {
  width: 12px;
  height: 12px;
  border: 1.5px solid rgba(0, 0, 0, 0.25);
  border-top-color: #000;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  flex-shrink: 0;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.err-enter-active,
.err-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.err-enter-from,
.err-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.success {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 4px;
}

.success-mark {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.success h2 {
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  line-height: 1.15;
}

.success p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.success strong {
  color: var(--text-primary);
  font-weight: 500;
}

.success-note {
  font-size: 13px !important;
  color: var(--text-tertiary) !important;
}

.success-note a {
  color: var(--text-secondary);
  text-decoration: underline;
  text-decoration-color: var(--border-strong);
  transition: color 0.15s;
}

.success-note a:hover {
  color: var(--text-primary);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-top: 10px;
  transition: color 0.15s ease;
}

.back-link:hover {
  color: var(--text-primary);
}
</style>
