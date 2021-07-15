import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations.js'
import * as getters from './getters.js'
import * as actions from './actions.js'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export const state = {
  session: undefined,
  profile: {}
}

const vuexPersisted = new createPersistedState({
  key: 'myVuex',
  storage: window.localStorage,
  reducer: state => ({
    profile: state.profile,
    session: state.session
  })
});

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true,
  plugins: [vuexPersisted]
});