/*
 * action types
 */

export const CHANGE_TITLE = 'CHANGE_TITLE';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const SET_ACCOUNTS = 'SET_ACCOUNTS';

/*
 * action creators
 */

export function changeTitle(title) {
    return { type: CHANGE_TITLE, title };
}
export function addTransaction(transaction) {
    return { type: ADD_TRANSACTION, transaction };
}
export function getAccounts(accounts) {
    return { type: SET_ACCOUNTS, accounts };
}
