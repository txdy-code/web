import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

console.log('main.js loaded')
console.log('Vue:', createApp)
console.log('App:', App)
console.log('router:', router)

const app = createApp(App)
app.use(router)
app.mount('#app')

console.log('App mounted')
