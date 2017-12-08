/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { FIND, UPDATE } from './mutation-types';

export default {
  [FIND](state, account) {
    state.email = account.email;
    state.displayName = account.displayName;
  },

  [UPDATE](state, account) {
    state.email = account.email;
    state.displayName = account.displayName;
  },
};
