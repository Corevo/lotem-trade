/*
 * action types
 */

export const ADD_TRANSACTION = 'ADD_TRANSACTION';

/*
 * action creators
 */

export function addTransaction(transaction) {
  return { type: ADD_TRANSACTION, transaction };
}
