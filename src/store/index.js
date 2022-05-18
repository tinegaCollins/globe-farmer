import { createStore } from 'vuex';

export default createStore({
    state: {
        userID: '627e0e1ead1acf5e1d1144ac',
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