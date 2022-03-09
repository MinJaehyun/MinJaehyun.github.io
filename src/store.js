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
  actions: {},
})

export default store
