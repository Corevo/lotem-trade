import { combineReducers } from 'redux';
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
    accountTransactions
});

export default reducers;
