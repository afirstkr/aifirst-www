
import Transformer from './Transformer';

export default class AccountTransformer extends Transformer
  @fetch: (account) ->
    email: account.email,
    displayName: account.displayName,

  @send: (account) ->
    email: account.email
    displayName: account.displayName
