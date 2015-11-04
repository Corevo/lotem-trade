import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { ADD_TRANSACTIONS, CHANGE_TITLE, SET_ACCOUNTS } from './actions';

function accountTransactions(state = [], action) {
    switch (action.type) {
        case ADD_TRANSACTIONS:
        return [
            ...state, ...action.transactions
        ];
        default:
        return state;
    }
}

function accounts(state = [], action) {
    let transactions = state.accounts[action.accountId].transactions;
    let newState = Object.assign({}, state);
    newState.accounts[action.accountId].transactions = accountTransactions(transactions = [], action);
    switch (action.type) {
        case SET_ACCOUNTS:
        return action.accounts;
        default:
        return newState;
    }
}

function changeTitle(state = 'Overview', action) {
    switch (action.type) {
        case CHANGE_TITLE:
        return action.title;
        default:
        return state;
    }
}

const reducers = combineReducers({
    router: routerStateReducer,
    title: changeTitle,
    accounts
});

export default reducers;
