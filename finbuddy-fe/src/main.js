import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            user: null,
            token: null,
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
    },
    actions: {},
    getters: {
        isLoggedIn(state) {
            return !!state.token;
        }
    },
})



const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
