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

import Firebase from 'firebase'

export const check = ({ commit }) => {
  const user = Firebase.auth().currentUser
  if (user) {
    store.dispatch('account/find')
    commit(types.CHECK)
  } else {
    commit(types.LOGOUT)
  }
  
};

export const register = ({ commit }, account) => {

  Firebase
    .auth()
    .createUserWithEmailAndPassword(account.email, account.password)
    .then((response) => {
      commit(types.REGISTER, response)
      const user = Firebase.auth().currentUser
      user.updateProfile({
        displayName: account.displayName
      }).then(function () {
        const user = Firebase.auth().currentUser
        store.dispatch('account/find')
        Vue.router.push({ name: 'Main' })

        user.sendEmailVerification().then(function () {
          console.log('Email sent.')
          // Email sent.
        }).catch(function (err) {
          // An error happened.
          console.log('Email error. ', err.message)
        });
      }).catch(function (err) {
        console.log('Request failed: ' + err.message)
      })
    })
    .catch((err) => {
      console.log('Request failed: ' + err.message)
    })
};

export const login = ({ commit }, payload) => {
  
  Firebase
    .auth()
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then((response) => {
      commit(types.LOGIN, response);
      store.dispatch('account/find');
      Vue.router.push({
        name: 'Main',
      });
    })
    .catch((err) => {
      alert('Oops. ' + err.message)
    })
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
  Vue.router.push({
    name: 'Login',
  });
};

export default {
  check,
  register,
  login,
  logout,
};
