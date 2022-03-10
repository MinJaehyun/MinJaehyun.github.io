import { createStore } from 'vuex'
import post from './assets/data/post'

const store = createStore({
  state: {
    post: post,
    visit: true,
  },
  mutations: {
    setVisit(state, boolean) {
      state.visit = boolean;
    }
  },
  actions: {
    // Hello component mounted action
    HELLO_SET_TIMEOUT({ commit }) {
      setTimeout(() => {
        commit("setVisit", false);
      }, 3000);
    },
  },
})

export default store
