import Vue from 'vue'

export const mutations = {
  UserSession (state, val){
    state.session = val
  },
  UpdateProfile (state, val){
    state.profile = val
  }
}