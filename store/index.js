export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
        console.log(state.auth.user)
      return state.auth.user
    }
  }