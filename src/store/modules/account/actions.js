/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import Transformer from '@/transformers/AccountTransformer';
import * as types from './mutation-types';

import Firebase from 'firebase'

export const find = ({ commit }) => {
  const user = Firebase.auth().currentUser
  if (user) {
    commit(types.FIND, Transformer.fetch(user));
  } else {
    commit(types.LOGOUT);
  }
  
};

export const update = ({ commit }, account) => {
  /*
   * Normally you would use a proxy to fetch the account:
   *
   * new Proxy()
   *  .find()
   *  .then((response) => {
   *    commit(types.FIND, Transformer.fetch(response));
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  // const account = {
  //   first_name: 'John',
  //   last_name: 'Doe',
  //   email: 'jonh@doe.com',
  // };

  commit(types.UPDATE, Transformer.fetch(account));
};

export default {
  find,
  update,
};
