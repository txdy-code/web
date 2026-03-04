<template>
  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">Key Features</h2>
      <p class="section-subtitle">
        Four pillars for a meaningful daily spiritual rhythm
      </p>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Mood & Today Dashboard</h3>
          <p>
            Weekly 7-day completion rings highlight mood, prayer, and quiz tasks
            plus streaks, totals, and a color mood semi-circle. Five mood tiers
            unlock paired verses with typewriter animation for calm reflection.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🙏</div>
          <h3>Prayer Flow</h3>
          <p>
            Time-aware morning and evening prayers refresh automatically. Each
            prayer bundles verse, inspiration, and Amen confirmation with a
            dedicated completion screen so progress is provable even offline.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📖</div>
          <h3>Bible Study Hub</h3>
          <p>
            Full 66-book Old/New Testament tabs with horizontal chapter navigation,
            Mark as Read, and Next Chapter actions. Long-press highlights with
            custom colors, filterable highlight list, and 500ms search.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">✨</div>
          <h3>Quiz Journey</h3>
          <p>
            500 curated questions delivered in three-question micro-levels. Each
            item shuffles four answers and cites Scripture for context reinforcement.
            Three-star scoring with confetti celebration.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🌍</div>
          <h3>Multi-Language Support</h3>
          <p>
            Serves global believers with eight languages, flexible themes, and
            permission guidance. All content works offline-first for reliable
            access anywhere.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>Profile & Insights</h3>
          <p>
            Track your spiritual journey with totals for prayers, moods, and read
            chapters. Quick access to Settings, Theme, Language, and Privacy & Terms.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 6rem 2rem;
  background: var(--white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  border-radius: 16px;
  background: var(--bg-light);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.feature-card p {
  color: var(--text-light);
  line-height: 1.7;
}
</style>
