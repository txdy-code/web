<template>
  <section id="download" class="download">
    <div class="container">
      <h2 class="section-title">Start Your Spiritual Journey Today</h2>
      <p class="section-subtitle">
        Available on iOS and Android. Download now and experience grace-filled daily rhythms.
      </p>

      <div class="download-buttons">
        <a href="#" class="store-button">
          <div class="store-icon">🍎</div>
          <div class="store-text">
            <span class="store-label">Download on the</span>
            <span class="store-name">App Store</span>
          </div>
        </a>
        <a href="#" class="store-button">
          <div class="store-icon">📱</div>
          <div class="store-text">
            <span class="store-label">Get it on</span>
            <span class="store-name">Google Play</span>
          </div>
        </a>
      </div>

      <div class="download-info">
        <div class="info-item">
          <strong>4 Languages</strong>
          <span>Global support</span>
        </div>
        <div class="info-item">
          <strong>Offline First</strong>
          <span>Works anywhere</span>
        </div>
        <div class="info-item">
          <strong>Privacy Focused</strong>
          <span>Your data stays yours</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.download {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: var(--white);
}

.container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.95;
}

.download-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.store-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--white);
  color: var(--text-dark);
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
}

.store-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.store-icon {
  font-size: 2.5rem;
}

.store-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.store-label {
  font-size: 0.8rem;
  color: var(--text-light);
}

.store-name {
  font-size: 1.2rem;
  font-weight: 600;
}

.download-info {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.info-item strong {
  font-size: 1.2rem;
}

.info-item span {
  font-size: 0.9rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .download-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
