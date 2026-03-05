<template>
  <div class="legal-page" :class="{ 'dark-mode': isDarkMode }">
    <div class="container">
      <div class="page-nav">
        <router-link :to="{ path: '/terms', query: isDarkMode ? { dark: 'true' } : {} }" class="related-link">Terms of Service →</router-link>
      </div>

      <h1>Privacy Policy</h1>
      <p class="last-updated">Last Updated: March 4, 2026</p>

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to GraceTrail. We respect your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and share information when you use our mobile application.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <h3>Personal Information</h3>
        <p>We may collect the following types of personal information:</p>
        <ul>
          <li>Account information (name, email address)</li>
          <li>Device information (device type, operating system, unique device identifiers)</li>
          <li>Usage data (app features used, interaction patterns, session duration)</li>
          <li>IP address and general location information</li>
        </ul>

        <h3>Spiritual Activity Data</h3>
        <p>GraceTrail stores your spiritual activity locally on your device, including:</p>
        <ul>
          <li>Mood tracking records</li>
          <li>Prayer completion history</li>
          <li>Bible reading progress and highlights</li>
          <li>Quiz results and learning insights</li>
        </ul>
        <p><strong>This data remains on your device and is not transmitted to our servers unless you explicitly enable cloud backup features.</strong></p>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide and maintain the GraceTrail app services</li>
          <li>Improve app functionality and user experience</li>
          <li>Send important updates and notifications</li>
          <li>Analyze usage patterns to enhance features</li>
          <li>Respond to your support requests</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>We may share information with trusted third-party service providers:</p>
        <ul>
          <li><strong>Analytics Providers:</strong> To understand app usage and improve performance</li>
          <li><strong>Cloud Storage:</strong> If you enable backup features, to securely store your data</li>
          <li><strong>Crash Reporting:</strong> To identify and fix technical issues</li>
        </ul>
        <p>These providers are contractually obligated to protect your data and use it only for specified purposes.</p>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information
          against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
          over the internet is 100% secure.
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
          <li>Export your data</li>
        </ul>
        <p>To exercise these rights, please contact us at the email address below.</p>
      </section>

      <section>
        <h2>Children's Privacy</h2>
        <p>
          GraceTrail is not intended for children under 13 years of age. We do not knowingly collect
          personal information from children under 13. If you believe we have collected such information,
          please contact us immediately.
        </p>
      </section>

      <section>
        <h2>Data Retention</h2>
        <p>
          We retain your information for as long as necessary to provide our services, comply with legal
          obligations, resolve disputes, and enforce our agreements. You may delete your account and
          associated data at any time through the app settings.
        </p>
      </section>

      <section>
        <h2>International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your own.
          We ensure appropriate safeguards are in place to protect your data in accordance with
          applicable privacy laws.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material changes
          through the app or via email. Your continued use of GraceTrail after changes constitutes
          acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at:</p>
        <p><strong>Email: </strong><a href="mailto:olive_dove@outlook.com">olive_dove@outlook.com</a></p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isDarkMode = ref(false)

onMounted(() => {
  // Check URL parameter for dark mode
  isDarkMode.value = route.query.dark === 'true'
})

// Watch for route query changes
watch(() => route.query.dark, (newValue) => {
  isDarkMode.value = newValue === 'true'
})
</script>

<style scoped>
.legal-page {
  padding: 8rem 2rem 4rem;
  background: var(--white);
  min-height: 100vh;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.page-nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.related-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.related-link:hover {
  color: var(--primary-dark);
}

h1 {
  font-size: 2.5rem;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.last-updated {
  color: var(--text-light);
  margin-bottom: 3rem;
}

section {
  margin-bottom: 2.5rem;
}

h2 {
  font-size: 1.8rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
  margin-top: 2rem;
}

h3 {
  font-size: 1.3rem;
  color: var(--text-dark);
  margin-bottom: 0.8rem;
  margin-top: 1.5rem;
}

p {
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 1rem;
}

ul {
  margin-left: 2rem;
  margin-bottom: 1rem;
}

li {
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 0.5rem;
}

strong {
  color: var(--text-dark);
}

/* Dark Mode Styles */
.legal-page.dark-mode {
  background: #1a1a1a;
}

.dark-mode h1,
.dark-mode h2,
.dark-mode h3,
.dark-mode strong {
  color: #ffffff;
}

.dark-mode p,
.dark-mode li {
  color: #b0b0b0;
}

.dark-mode .last-updated {
  color: #808080;
}

.dark-mode .page-nav {
  border-bottom-color: #333333;
}

.dark-mode .related-link {
  color: #60a5fa;
}

.dark-mode .related-link:hover {
  color: #93c5fd;
}

.dark-mode a {
  color: #60a5fa;
}
</style>
