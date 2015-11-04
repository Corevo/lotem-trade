/*
 * action types
 */

export const CHANGE_TITLE = 'CHANGE_TITLE';
export const ADD_TRANSACTIONS = 'ADD_TRANSACTIONS';
export const SET_ACCOUNTS = 'SET_ACCOUNTS';

/*
 * action creators
 */

export function changeTitle(title) {
    return { type: CHANGE_TITLE, title };
}
export function addTransactions(transactions) {
    return { type: ADD_TRANSACTIONS, transactions };
}
export function getAccounts(accounts) {
    return { type: SET_ACCOUNTS, accounts };
}
