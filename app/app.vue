<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* Surface */
  --bg: #060606;
  --bg-elevated: #0c0c0c;
  --bg-elevated-hover: #111111;
  --border: rgba(255, 255, 255, 0.07);
  --border-strong: rgba(255, 255, 255, 0.13);

  /* Text */
  --text-primary: #f0f0f0;
  --text-secondary: #9a9a9a;
  --text-tertiary: #6a6a6a;
  --text-faint: #444444;

  /* Accent (used sparingly — on hover/active) */
  --accent: #f5f1e8;

  /* Type */
  --font-sans: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Container */
  --container-max: 920px;
  --container-pad: 32px;

  /* Legacy aliases */
  --surface: var(--bg-elevated);
  --text: var(--text-primary);
  --muted: var(--text-secondary);
}

html {
  background: var(--bg);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  background:
    radial-gradient(ellipse 1200px 600px at 50% -200px,
                    rgba(255, 255, 255, 0.025),
                    transparent 70%),
    var(--bg);
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

::selection {
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
}
</style>
