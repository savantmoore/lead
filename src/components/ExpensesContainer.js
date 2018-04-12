//src/components/ExpensesContainer

import Expenses from './Expenses'
import { connect } from 'react-redux';
import {addExpense, removeExpense, updateExpenseName, updateExpenseAmount} from '../actions'

const mapStateToProps = (state) => {
	return {
		expenses: state.expenses,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

		handleAddExpense: (id) => {
			dispatch(addExpense(id))
		},

		handleRemoveExpense: (id) => {
			dispatch(removeExpense(id))
		},

		handleUpdateExpenseName: (id, newName) => {
			dispatch(updateExpenseName(id, newName))
		},

		handleUpdateExpenseAmount: (id, newAmount) => {
			dispatch(updateExpenseAmount(id, newAmount))
		},
	}
}

const ExpensesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Expenses)

export default ExpensesContainer

