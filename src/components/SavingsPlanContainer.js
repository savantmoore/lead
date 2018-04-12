//src/components/SavingsPlanContainer

import SavingsPlan from './SavingsPlan'
import { connect } from 'react-redux';
import {updateMonthlySavings} from '../actions'

const mapStateToProps = (state) => {
	return {
		assumptions:state.assumptions,
		expenses: state.expenses,
		monthlySavings: state.savingsPlan.monthlySavings
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleUpdateMonthlySavings: (amount) => {
			dispatch(updateMonthlySavings(Number((amount).toString().replace(",", ""))));
		}
	}
}

const SavingsPlanContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SavingsPlan)

export default SavingsPlanContainer

