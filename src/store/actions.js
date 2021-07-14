export const actionLogin = ({commit}, {username, password}) => {
  return new Promise((resolve, reject) => {
    if(username === 'root' && password === 'rootroot'){
      commit('UserSession', 'ok')
      resolve()
    }
    else{
      commit('UserSession', '')
      reject()
    }
  }) 
} 

export const actionLogout = ({commit}) => {
  return new Promise((resolve, reject) => {
    commit('UserSession', '')
    console.log('logout')
    resolve()
  })
}