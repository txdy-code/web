<template>
  <section id="screenshots" class="screenshots">
    <div class="container">
      <h2 class="section-title">See GraceTrail in Action</h2>
      <p class="section-subtitle">
        Experience the beautiful interface designed for your daily devotion
      </p>

      <div class="screenshots-grid">
        <div class="screenshot-item">
          <img src="/doc/home.PNG" alt="Home Dashboard" />
          <p class="screenshot-label">Home Dashboard</p>
        </div>
        <div class="screenshot-item">
          <img src="/doc/theme.PNG" alt="Theme Settings" />
          <p class="screenshot-label">Theme Settings</p>
        </div>
        <div class="screenshot-item">
          <img src="/doc/prayer.PNG" alt="Prayer Flow" />
          <p class="screenshot-label">Prayer Flow</p>
        </div>
        <div class="screenshot-item">
          <img src="/doc/bible.PNG" alt="Bible Study" />
          <p class="screenshot-label">Bible Study</p>
        </div>
        <div class="screenshot-item">
          <img src="/doc/quiz.PNG" alt="Quiz Journey" />
          <p class="screenshot-label">Quiz Journey</p>
        </div>
        <div class="screenshot-item">
          <img src="/doc/statistics.PNG" alt="Statistics" />
          <p class="screenshot-label">Statistics</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.screenshots {
  padding: 6rem 2rem;
  background: var(--bg-light);
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

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.screenshot-item {
  text-align: center;
}

.screenshot-item img {
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
}

.screenshot-item img:hover {
  transform: scale(1.05);
}

.screenshot-label {
  margin-top: 1rem;
  font-weight: 600;
  color: var(--text-dark);
}
</style>
