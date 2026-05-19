<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    statusMessage?: string
    message?: string
  }
}>()

const is404 = computed(() => props.error.statusCode === 404)

const handleHome = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="root">
    <div class="inner">
      <span class="code">{{ error.statusCode }}</span>
      <h1>{{ is404 ? 'Page not found.' : 'Something went wrong.' }}</h1>
      <p class="msg">
        {{
          is404
            ? "The page you're looking for doesn't exist or has been moved."
            : 'An unexpected error occurred. Please try again or go back home.'
        }}
      </p>
      <button class="btn" @click="handleHome">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to home
      </button>
    </div>
  </div>
</template>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  background: #060606;
  color: #f0f0f0;
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}

body {
  background:
    radial-gradient(ellipse 1000px 500px at 50% -200px, rgba(255,255,255,0.025), transparent 70%),
    #060606;
  min-height: 100vh;
}
</style>

<style scoped>
.root {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
}

.inner {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 400px;
  width: 100%;
}

.code {
  display: block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #444;
  font-variant-numeric: tabular-nums;
  margin-bottom: 4px;
}

h1 {
  font-size: clamp(26px, 4vw, 34px);
  font-weight: 400;
  letter-spacing: -0.025em;
  line-height: 1.15;
  color: #f0f0f0;
}

.msg {
  font-size: 14px;
  color: #6a6a6a;
  line-height: 1.65;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  font-size: 13px;
  font-weight: 500;
  color: #6a6a6a;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
  width: fit-content;
}

.btn:hover {
  color: #f0f0f0;
}
</style>
