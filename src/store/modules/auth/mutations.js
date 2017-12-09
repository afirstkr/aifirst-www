/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import Vue from 'vue';
import {
  REGISTER,
  LOGIN,
  LOGOUT,
} from './mutation-types';

export default {
  [REGISTER](state, account) {
    state.authenticated = true;
    
    // localStorage.setItem('id_token', account.uid);
  },

  [LOGIN](state, token) {
    state.authenticated = true;
    
    // localStorage.setItem('id_token', token);
    // Vue.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  [LOGOUT](state) {
    state.authenticated = false;
    
    // localStorage.removeItem('id_token');
    // Vue.$http.defaults.headers.common.Authorization = '';
  },
};
