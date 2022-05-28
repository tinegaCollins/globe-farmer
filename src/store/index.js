import  { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";


export default createStore({
    plugins: [createPersistedState()],
    state: {
        userID: '',
    },
    mutations: {
        updateUserID(state, payload) {
            state.userID = payload;
        },
    },
    actions: {
    },
    getters: {
        getUserID(state) {
            return state.userID;
        },
    }
});
