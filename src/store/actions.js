import api from '@/api.js'
import Vue from 'vue'

export const actionLogin = ({commit}, {username, password}) => {
  return new Promise((resolve, reject) => {
    api.login({'username': username, 'password': password}).then(res => {
      getProfile(username)
      if(res.data === 'Ok'){
        Vue.prototype.$success('歡迎回來')
        commit('UserSession', 'Ok')
        resolve(res)
      }
    }).catch(() => {
      Vue.prototype.$error('帳號或密碼錯誤')
    })
  }) 
} 

export const actionLogout = ({commit}) => {
  return new Promise((resolve, reject) => {
    commit('UserSession', '')
    console.log('logout')
    resolve()
  })
}

export const getProfile = ({commit}, username) => {
  api.profile(username).then((res) => {
    console.log(res.data)
    // commit('UpdateProfile', res.data)
  })
}