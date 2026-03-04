<template>
  <section id="download" class="download">
    <div class="container">
      <h2 class="section-title">Start Your Spiritual Journey Today</h2>
      <p class="section-subtitle">
        Available on iOS and Android. Download now and experience grace-filled daily rhythms.
      </p>

      <div class="download-buttons">
        <a href="#" class="store-button">
          <svg class="store-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
          </svg>
          <div class="store-text">
            <span class="store-label">Download on the</span>
            <span class="store-name">App Store</span>
          </div>
        </a>
        <a href="#" class="store-button">
          <svg class="store-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
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
  width: 40px;
  height: 40px;
  color: var(--text-dark);
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
