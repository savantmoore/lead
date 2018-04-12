//src/router.js

import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Landing from './components/Landing'
import WhatIsARainyDayFund from './components/WhatIsARainyDayFund'
import AssumptionsContainer from './components/AssumptionsContainer'
import ExpensesContainer from './components/ExpensesContainer'
import SavingsPlanContainer from './components/SavingsPlanContainer'

export default(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Landing} />
			<Route path="what-is-a-rainy-day-fund" component={WhatIsARainyDayFund} />
			<Route path="assumptions" component={AssumptionsContainer} />
			<Route path="expenses" component={ExpensesContainer} />
			<Route path="savings-plan" component={SavingsPlanContainer} />
		</Route>
	</Router>
);
