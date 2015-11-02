/*
 * action types
 */

export const CHANGE_TITLE = 'CHANGE_TITLE';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';

/*
 * action creators
 */

export function changeTitle(title) {
    return { type: CHANGE_TITLE, title };
}
export function addTransaction(transaction) {
  return { type: ADD_TRANSACTION, transaction };
}
