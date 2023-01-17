import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import RockPaperScissors from './components/RockPaperScissors.vue'
import AboutPage from '@/views/AboutPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: RockPaperScissors
        },
        {
            path: '/about',
            name: 'About',
            component: AboutPage
        }
    ]
})
createApp(App).use(router).mount('#app')
