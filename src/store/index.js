import { createStore } from 'vuex'
import post from './modules/posts.js'

export default createStore({
  modules: { post }
})
