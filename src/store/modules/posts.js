export default {
  state: {
    posts: []
  },
  actions: {
    async fetchPosts({commit, getters, dispatch}, limit = 3) {
      const responce = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
      )
      const posts = await responce.json()
      commit('updatePosts', posts)
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost)
    }
  },
  getters: {
    validPosts(state) {
      return state.posts.filter(post => post.title && post.body)
    },
    allPosts(state) {
      return state.posts
    },
    postsCountAll(_, getters) {
      return getters.allPosts.length
    },
    postsCountValid(_, getters) {
      return getters.validPosts.length
    }
  }
}
