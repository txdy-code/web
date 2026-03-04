<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-header">
          <img src="/doc/AppIcon.png" alt="GraceTrail Icon" class="hero-icon" />
          <div>
            <h1 class="hero-title">GraceTrail</h1>
            <p class="hero-subtitle">Mood-Guided Daily Rhythm</p>
          </div>
        </div>
        <p class="hero-description">
          Pray, Track Moods, and Learn Scripture. A compact spiritual companion
          for believers who want a measurable daily rhythm built around four pillars:
          Mood, Prayer, Bible, and Quiz.
        </p>
        <div class="hero-buttons">
          <a href="#download" class="btn-large">Download Now</a>
          <a href="#features" class="btn-outline">Learn More</a>
        </div>
      </div>
      <div class="hero-image">
        <div class="phone-mockup">
          <img src="/doc/home.PNG" alt="GraceTrail App" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 8rem 2rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: var(--white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
}

.hero-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.hero-icon {
  width: 100px;
  height: 100px;
  border-radius: 22px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn-large {
  background: var(--white);
  color: var(--primary);
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-large:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-outline {
  border: 2px solid var(--white);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background 0.3s;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
}

.phone-mockup {
  max-width: 300px;
  margin: 0 auto;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.phone-mockup img {
  width: 100%;
  display: block;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-buttons {
    justify-content: center;
  }
}
</style>
