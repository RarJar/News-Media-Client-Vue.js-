import { createStore } from 'vuex'

export default createStore({
  state: {
    userData : "",
    token: ""
  },
  getters: {
    getUserData: state=>state.userData,
    getToken: state=>state.token
  },
  mutations: {
  },
  actions: {
    saveUserData: ({state},value) => state.userData = value,
    saveToken: ({state},value) => state.token = value
  },
  modules: {
  }
})
