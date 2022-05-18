import { createStore } from 'vuex';

export default createStore({
    state: {
        userID: '6282924fd819753e4234f047',
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