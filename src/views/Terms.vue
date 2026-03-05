<template>
  <div class="legal-page" :class="{ 'dark-mode': isDarkMode }">
    <div class="container">
      <div class="page-nav">
        <router-link :to="{ path: '/privacy', query: isDarkMode ? { dark: 'true' } : {} }" class="related-link">Privacy Policy →</router-link>
      </div>

      <h1>Terms of Service</h1>
      <p class="last-updated">Last Updated: March 4, 2026</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to GraceTrail. These Terms of Service ("Terms") govern your access to and use of the
          GraceTrail mobile application ("App"). By accessing or using the App, you agree to be bound by
          these Terms. If you do not agree, please do not use the App.
        </p>
      </section>

      <section>
        <h2>2. Eligibility</h2>
        <p>
          You must be at least 16 years old to use GraceTrail. If you are under 16, you must have
          permission from a parent or legal guardian. By using the App, you represent that you meet
          these requirements.
        </p>
      </section>

      <section>
        <h2>3. User Account</h2>
        <p>To access certain features, you may need to create an account. You agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Notify us immediately of any unauthorized access</li>
          <li>Accept responsibility for all activities under your account</li>
        </ul>
      </section>

      <section>
        <h2>4. Acceptable Use</h2>
        <p>You agree to use GraceTrail only for lawful purposes. You must not:</p>
        <ul>
          <li>Use the App for any illegal or unauthorized purpose</li>
          <li>Attempt to gain unauthorized access to the App or its systems</li>
          <li>Interfere with or disrupt the App's functionality</li>
          <li>Engage in data scraping, hacking, or distribution of malware</li>
          <li>Reverse engineer, decompile, or disassemble the App</li>
          <li>Use the App to harass, abuse, or harm others</li>
          <li>Violate any applicable laws or regulations</li>
        </ul>
      </section>

      <section>
        <h2>5. Privacy</h2>
        <p>
          Your use of GraceTrail is also governed by our Privacy Policy, which explains how we collect,
          use, and protect your personal information. Please review the Privacy Policy to understand
          our practices.
        </p>
      </section>

      <section>
        <h2>6. Intellectual Property</h2>
        <p>
          All content, features, and functionality of GraceTrail, including but not limited to text,
          graphics, logos, icons, images, audio clips, and software, are the exclusive property of
          GraceTrail or its licensors and are protected by copyright, trademark, and other intellectual
          property laws.
        </p>
        <p>You may not:</p>
        <ul>
          <li>Copy, modify, or create derivative works of the App</li>
          <li>Reproduce, distribute, or publicly display App content</li>
          <li>Use GraceTrail trademarks without written permission</li>
        </ul>
      </section>

      <section>
        <h2>7. Content and Scripture</h2>
        <p>
          GraceTrail provides Bible content, prayers, and quiz questions for spiritual growth purposes.
          While we strive for accuracy, we make no warranties regarding the completeness or theological
          interpretation of the content. Users are encouraged to consult with spiritual leaders and
          study Scripture in context.
        </p>
      </section>

      <section>
        <h2>8. User-Generated Content</h2>
        <p>
          If you create content within the App (such as notes, highlights, or prayers), you retain
          ownership of that content. However, you grant us a license to store and process this content
          to provide the App's services. You are responsible for the content you create and must ensure
          it complies with these Terms.
        </p>
      </section>

      <section>
        <h2>9. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to GraceTrail at any time, with or
          without notice, for violations of these Terms or for any other reason. You may delete your
          account at any time through the App settings.
        </p>
        <p>Upon termination:</p>
        <ul>
          <li>Your right to use the App will immediately cease</li>
          <li>We may delete your account and associated data</li>
          <li>Provisions that should survive termination will remain in effect</li>
        </ul>
      </section>

      <section>
        <h2>10. Disclaimers</h2>
        <p>
          GraceTrail is provided "as is" and "as available" without warranties of any kind, either
          express or implied, including but not limited to warranties of merchantability, fitness for
          a particular purpose, or non-infringement.
        </p>
        <p>We do not warrant that:</p>
        <ul>
          <li>The App will be uninterrupted, secure, or error-free</li>
          <li>Defects will be corrected</li>
          <li>The App is free of viruses or harmful components</li>
          <li>Results from using the App will meet your expectations</li>
        </ul>
      </section>

      <section>
        <h2>11. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, GraceTrail and its affiliates, officers, directors,
          employees, and agents shall not be liable for any indirect, incidental, special, consequential,
          or punitive damages, including but not limited to loss of profits, data, or other intangible
          losses, resulting from:
        </p>
        <ul>
          <li>Your use or inability to use the App</li>
          <li>Unauthorized access to your data</li>
          <li>Any conduct or content of third parties</li>
          <li>Any content obtained from the App</li>
        </ul>
      </section>

      <section>
        <h2>12. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless GraceTrail and its affiliates from any claims,
          damages, losses, liabilities, and expenses (including legal fees) arising from your use of
          the App or violation of these Terms.
        </p>
      </section>

      <section>
        <h2>13. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Material changes will be communicated through
          the App or via email. Your continued use of GraceTrail after changes are posted constitutes
          acceptance of the updated Terms. We encourage you to review these Terms periodically.
        </p>
      </section>

      <section>
        <h2>14. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with applicable laws, without
          regard to conflict of law principles. Any disputes arising from these Terms or your use of
          the App shall be resolved in the appropriate courts.
        </p>
      </section>

      <section>
        <h2>15. Severability</h2>
        <p>
          If any provision of these Terms is found to be invalid or unenforceable, the remaining
          provisions will continue in full force and effect.
        </p>
      </section>

      <section>
        <h2>16. Contact Us</h2>
        <p>If you have questions about these Terms of Service, please contact us at:</p>
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
