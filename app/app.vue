<template>
  <NuxtPage />
</template>

<style>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #000;
  --surface: #0a0a0a;
  --border: #1a1a1a;
  --text: #ededed;
  --muted: #888;
  --accent: #fff;
}

html {
  background: var(--bg);
  color: var(--text);
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
