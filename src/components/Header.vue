<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="/doc/AppIcon.png" alt="GraceTrail" class="logo-icon" />
        <span class="logo-text">GraceTrail</span>
      </router-link>
      <nav class="nav">
        <a href="#features">Features</a>
        <a href="#screenshots">Screenshots</a>
        <a href="#download" class="btn-primary">Download</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav a {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  transition: color 0.3s;
}

.nav a:hover {
  color: var(--primary);
}

.btn-primary {
  background: var(--primary);
  color: var(--white) !important;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  transition: background 0.3s;
}

.btn-primary:hover {
  background: var(--primary-dark);
}
</style>