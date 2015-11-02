import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { ADD_TRANSACTION } from './actions';

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
const reducers = combineReducers({
    router: routerStateReducer,
    accountTransactions
});

export default reducers;
