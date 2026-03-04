<template>
  <div class="website">
    <Header />
    <Hero />
    <Features />
    <Screenshots />
    <Download />
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Features from '../components/Features.vue'
import Screenshots from '../components/Screenshots.vue'
import Download from '../components/Download.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.website {
  width: 100%;
}
</style>
