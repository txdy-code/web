<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-brand">
            <img src="/doc/AppIcon.png" alt="GraceTrail" class="footer-icon" />
            <h3 class="footer-title">GraceTrail</h3>
          </div>
          <p class="footer-description">
            A compact spiritual companion for believers seeking a measurable daily rhythm.
          </p>
        </div>

        <div class="footer-section">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#screenshots">Screenshots</a></li>
            <li><a href="#download">Download</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><router-link to="/terms">Terms of Service</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 GraceTrail. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--text-dark);
  color: var(--white);
  padding: 4rem 2rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.footer-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
}

.footer-title {
  font-size: 1.5rem;
  margin-bottom: 0;
  color: var(--primary);
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.footer-section h4 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: var(--white);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
