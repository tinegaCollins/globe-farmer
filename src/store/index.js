import { createStore } from 'vuex';

export default createStore({
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