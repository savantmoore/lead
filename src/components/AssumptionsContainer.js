//src/components/AssumptionsContainer

import { connect } from 'react-redux';
import { updateIncomeSources, updateIncome, updateSavings } from '../actions'
import Assumptions from './Assumptions'

const mapStateToProps = (state) => {
	return {
		assumptions: state.assumptions,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

		handleUpdateIncomeSources: (sources) => {
			dispatch(updateIncomeSources(sources))
		},

		handleUpdateIncome: (income) => {
			dispatch(updateIncome(
				Number((income).replace(",",""))
			))
		},

		handleUpdateSavings: (savings) => {
			dispatch(updateSavings(
				Number((savings).replace(",", ""))
			))
		}
	}
}

const AssumptionsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Assumptions)

export default AssumptionsContainer