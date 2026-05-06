<template>
  <div class="page">
    <header>
      <span class="brand"><Logo /></span>
    </header>

    <main>
      <section class="hero">
        <p class="eyebrow">Android App</p>
        <h1>Nyx Clock</h1>
        <p class="tagline">Turn your phone into a stunning bedside clock. Beautiful standby displays for nightstands, desks, and ambient screens.</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.nyxclock.app"
          target="_blank"
          rel="noopener noreferrer"
          class="play-btn"
        >
          <Icon name="simple-icons:googleplay" size="15" />
          Get it on Google Play
        </a>
      </section>

      <section class="features">
        <div class="feature">
          <Icon name="lucide:layout-grid" size="17" />
          <div>
            <h3>Dozens of clock faces</h3>
            <p>Digital, analog, flip, word clock, arc and more — with new faces added regularly.</p>
          </div>
        </div>
        <div class="divider" />
        <div class="feature">
          <Icon name="lucide:sliders-horizontal" size="17" />
          <div>
            <h3>Fully customizable</h3>
            <p>Font, color themes, weather, brightness — every face is fully yours.</p>
          </div>
        </div>
        <div class="divider" />
        <div class="feature">
          <Icon name="lucide:moon" size="17" />
          <div>
            <h3>Built for nightstands</h3>
            <p>AMOLED dark themes, burn-in protection, and ambient light awareness for overnight use.</p>
          </div>
        </div>
        <div class="divider" />
        <div class="feature">
          <Icon name="lucide:badge-check" size="17" />
          <div>
            <h3>One-time purchase</h3>
            <p>No subscriptions. No ads. Pay once, own forever.</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <span>© 2026 Fortytwo Apps</span>
      <NuxtLink to="/nyxclock/privacy">Privacy Policy</NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 860px;
  margin: 0 auto;
  padding: 0 32px;
}

header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border);
	padding:1rem 0;
}

header svg{
	width: auto;
	height:60px;
}

.brand {
  font-size: 13px;
  font-weight: 500;
  color: #444;
  letter-spacing: 0.06em;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 0 60px;
  gap: 64px;
}

/* Hero */
.hero {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 520px;
}

.eyebrow {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #444;
}

h1 {
  font-size: clamp(48px, 9vw, 72px);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 1;
  color: #fff;
}

.tagline {
  font-size: 16px;
  color: #555;
  line-height: 1.7;
  max-width: 460px;
}

.play-btn {
  margin-top: 4px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: #fff;
  color: #000;
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
  transition: opacity 0.15s;
  width: fit-content;
}

.play-btn:hover {
  opacity: 0.88;
}

/* Features */
.features {
  display: flex;
  flex-direction: column;
  max-width: 480px;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 0;
  color: #444;
}

.feature svg {
  flex-shrink: 0;
  margin-top: 1px;
}

.feature h3 {
  font-size: 13px;
  font-weight: 500;
  color: #aaa;
  margin-bottom: 4px;
}

.feature p {
  font-size: 13px;
  color: #444;
  line-height: 1.55;
}

.divider {
  height: 1px;
  background: var(--border);
}

/* Footer */
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  border-top: 1px solid var(--border);
  font-size: 12px;
  color: #333;
}

footer a {
  color: #333;
  transition: color 0.15s;
}

footer a:hover {
  color: #888;
}
</style>
