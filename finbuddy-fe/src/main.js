import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import config from './config';
// Create a new store instance.
const store = createStore({
    state: {
        "user": {
            "id": null,
            "token": null,
        },
        "txns": [],
        "txn": {

        }
    },
    mutations: {
        setUser(state, user) {
            state.user.id = user;
        },
        setToken(state, token) {
            state.user.token = token;
        },
        setTxns(state, txns) {
            state.txns = txns
        },
        loadUsers(state, users) {
            state.users = users
        }
    },
    actions: {
        async loadTxns({ commit, state }) {
            try {
                const response = await axios.get(config.BASE_URL + '/txns', {
                    headers: {
                        Authorization: 'Bearer ' + state.user.token
                    }
                });
                commit('setTxns', response.data.result)
            }
            catch (error) {
                console.log(error);
            }
        },
        async addTxn({ commit, state }, data) {
            try {
                const response = await axios.post(config.BASE_URL + '/txns/add/', data.payload, {
                    headers: {
                        Authorization: 'Bearer ' + state.user.token
                    }
                });
                router.push("/txns");
            }
            catch (error) {
                console.log(error);
            }
        },
        async markComplete({ commit, state }, id) {
            try {
                const payload = {
                    txn_id: id
                };
                const response = await axios.patch(config.BASE_URL + '/txns/update/', payload, {
                    headers: {
                        Authorization: 'Bearer ' + state.user.token
                    }
                });
                router.push("/");
            }
            catch (error) {
                console.log(error);
            }
        },
        async loadUsers({ commit, state }) {
            try {
                const response = await axios.get(config.BASE_URL + '/users/list/', {
                    headers: {
                        Authorization: 'Bearer ' + state.user.token
                    }
                });
                commit('loadUsers', response.data.result)
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        isLoggedIn(state) {
            return !!state.user.token;
        },
        getToken(state) {
            return state.user.token;
        },
        txns(state) {
            return state.txns;
        },
        users(state) {
            return state.users;
        }
    },
})



const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
