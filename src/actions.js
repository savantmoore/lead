//src/actions.js

//=============================================
// Assumptions

//action types
export const UPDATE_INCOME_SOURCES = 'UPDATE_INCOME_SOURCES';
export const UPDATE_INCOME = 'UPDATE_INCOME';
export const UPDATE_SAVINGS = 'UPDATE_SAVINGS';

//action creators
export const updateIncomeSources = (sources) => {
	return {type: UPDATE_INCOME_SOURCES , sources}
}

export const updateIncome = (income) => {
	return {type: UPDATE_INCOME, income}
}

export const updateSavings = (savings) => {
	return {type: UPDATE_SAVINGS, savings}
}

//=============================================
// Expenses

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const UPDATE_EXPENSE_NAME = 'UPDATE_EXPENSE_NAME';
export const UPDATE_EXPENSE_AMOUNT = 'UPDATE_EXPENSE_AMOUNT';

export const addExpense = (id) => {
	return {type: ADD_EXPENSE, id}
}

export const removeExpense = (id) => {
	return {type: REMOVE_EXPENSE, id}
}

export const updateExpenseName = (id, newName) => {
	return {type: UPDATE_EXPENSE_NAME, payload:{id, newName}}
}

export const updateExpenseAmount = (id, newAmount) => {
	return {type: UPDATE_EXPENSE_AMOUNT, payload:{id, newAmount}}
}


//=============================================
// SavingsPlan

export const UPDATE_MONTHLY_SAVINGS = 'UPDATE_MONTHLY_SAVINGS'

export const updateMonthlySavings = (newAmount) => {
	return {type: UPDATE_MONTHLY_SAVINGS, newAmount}
}


