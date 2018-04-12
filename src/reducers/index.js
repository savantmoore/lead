//src/reducers/index.js

import { combineReducers } from 'redux';

import { assumptionsReducer, expensesReducer, savingsPlanReducer } from './reducers';

const appReducer = combineReducers({
    assumptions: assumptionsReducer,
    expenses: expensesReducer,
    savingsPlan: savingsPlanReducer
});

export default appReducer;

