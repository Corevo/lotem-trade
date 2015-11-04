import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { ADD_TRANSACTION, CHANGE_TITLE, SET_ACCOUNTS } from './actions';

function accounts(state = [], action) {
    switch (action.type) {
        case SET_ACCOUNTS:
        return action.accounts;
        default:
        return state;
    }
}

function accountTransactions(state = [], action) {
    switch (action.type) {
        case ADD_TRANSACTION:
        return [
            ...state, action.transaction
        ];
        default:
        return state;
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
