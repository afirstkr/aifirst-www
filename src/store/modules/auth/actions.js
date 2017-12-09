/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from 'vue';
import store from '@/store';
import * as types from './mutation-types';

import firebase from 'firebase'

export const check = ({ commit }, user) => {
  if (user) {
    commit(types.LOGIN)
  } else {
    commit(types.LOGOUT)
  }
};

export const register = ({ commit }, account) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(account.email, account.password)
    .then((response) => {
      commit(types.REGISTER, response)
      
      const user = firebase.auth().currentUser
      user.updateProfile({
        displayName: account.displayName
      }).then(function () {
        const user = firebase.auth().currentUser
        store.dispatch('account/find')
        Vue.router.push({ name: 'main' })
        user.sendEmailVerification()
      })
    })
};

export const login = ({ commit }, payload) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then((response) => {
      commit(types.LOGIN, response);
      store.dispatch('account/find');
      Vue.router.push({
        name: 'main',
      });
    })
};

export const logout = ({ commit }) => {
  return firebase.auth().signOut().then(()=>{
    commit(types.LOGOUT);
    Vue.router.push({
      name: 'login',
    });
  })
};

export default {
  check,
  register,
  login,
  logout,
};
