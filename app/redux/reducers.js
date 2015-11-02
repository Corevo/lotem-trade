import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { ADD_TRANSACTION, CHANGE_TITLE } from './actions';

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
    title: changeTitle
});

export default reducers;
