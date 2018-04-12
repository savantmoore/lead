//src/reducers/reducers.js

import * as types from '../actions';

//=================================
// Assumptions Reducer
//=================================

const initialAssumptionsState = {
	  incomeSources: 's1',
	  income: 0,
	  initialSavings: 0
};

const assumptionsReducer = function(state=initialAssumptionsState, action){
	switch(action.type){
		case types.UPDATE_INCOME_SOURCES:
			return Object.assign({}, state, {incomeSources: action.sources})

    case types.UPDATE_INCOME:
			return Object.assign({}, state, {income: action.income})

    case types.UPDATE_SAVINGS:
			return Object.assign({}, state, {initialSavings: action.savings})

    default: return state;
  }
}

//=================================
// Expenses Reducer
//=================================

const initialExpensesState = [
	{
		id: 'exp_1',
		name: 'Rent',
		amount: 0
	},

	{
		id: 'exp_2',
		name: 'Food',
		amount: 0
	},

	{
		id: 'exp_3',
		name: 'Electric Bill',
		amount: 0
	}
]

const expensesReducer = function(state = initialExpensesState, action){
	switch(action.type){
		case types.ADD_EXPENSE:
			return Object.assign([], state,
				[
						{
							id: action.id,
							name: '',
							amount: 0
						},

					...state,
				]
			)

		case types.REMOVE_EXPENSE:
			return state.filter(expense => {
				return expense.id !== action.id;
			})

		case types.UPDATE_EXPENSE_NAME:
			let {id, newName} = action.payload;
			return state.map(expense => {
				if(expense.id === id){
					expense.name = newName;
				}

				return expense;
			})

		case types.UPDATE_EXPENSE_AMOUNT:
			let id_1 = action.payload.id;
			let newAmount = action.payload.newAmount

			return state.map(expense => {
				if(expense.id === id_1){
					expense.amount = newAmount;
				}

				return expense;
			})

		default: return state;
	}
}

//=================================
// SavingsPlan Reducer
//=================================

const initialSavingsPlanState = {
	monthlySavings: 50
}

const savingsPlanReducer = function(state=initialSavingsPlanState, action){
	switch(action.type){
		case types.UPDATE_MONTHLY_SAVINGS:
			return Object.assign({}, state, {monthlySavings: action.newAmount})

		default: return state;
	}
}


export {assumptionsReducer, expensesReducer, savingsPlanReducer};