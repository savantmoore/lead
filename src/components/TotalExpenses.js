//src/components/TotalExpenses.js

import React from 'react';
import {formatDollarValues, calcTotalExpenses} from '../helpers'

const TotalExpenses = ({expenses}) =>  {
    return (
        <div id="TotalExpenses">
            <h3>Total Monthly Expenses</h3>

            <h3 id="expenses-total">
               ${'   '}{formatDollarValues(calcTotalExpenses(expenses))}
            </h3>
        </div>
    )
}


export default TotalExpenses;