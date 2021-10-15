import { createStore } from 'vuex'
import post from './assets/data/post'

const store = createStore({
  state(){
    return {
      name : "jhMin",
      post: post,
    }
  },
})

export default store