import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/scss/main.scss"
store.subscribe( (mutation, state) => {
    localStorage.setItem('notes', JSON.stringify(state.notes));  
})
createApp(App)
.use(store)
.use(router)
.mount('#app')
