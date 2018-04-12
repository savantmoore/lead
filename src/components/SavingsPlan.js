//src/components/SavingsPlan.js

import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

import {formatDollarValues, calcTotalExpenses} from '../helpers'


const SavingsPlan = ({assumptions, expenses, monthlySavings, handleUpdateMonthlySavings}) =>  {
        if(assumptions.income === 0 || calcTotalExpenses(expenses) === 0){
            return (
                <div>
                    <h3 className="warning-text">
                        {assumptions.income === 0 ? `You need to input your income on the Assumptions tab!` : '' }
                    </h3>
                    <h3 className="warning-text">
                        {calcTotalExpenses(expenses) === 0 ? `You need to tally up your expenses on the Expenses tab!` : '' }
                    </h3>
                </div>
            )
        }
        else{
            const   //basic stuff from state
                    rawIncome = assumptions.income,
                    rawInitialSavings = assumptions.initialSavings,
                    rawMonthlyExpenses = calcTotalExpenses(expenses),
                    incomeSources = Number(assumptions.incomeSources[1]),


                    //calculations, formatted data
                    initialSavings = formatDollarValues(assumptions.initialSavings),
                    monthsOfExpenses = Number(6/incomeSources),
                    monthlyExpenses = formatDollarValues(rawMonthlyExpenses),
                    rawSavingsGoal = monthsOfExpenses*rawMonthlyExpenses,
                    savingsGoal = formatDollarValues(monthsOfExpenses*rawMonthlyExpenses),
                    rawSavingsDeficit = rawSavingsGoal - rawInitialSavings,
                    savingsDeficit = formatDollarValues(rawSavingsGoal - rawInitialSavings);

            return (
                <div id="SavingsPlan">
                    <h1>Savings Plan</h1>

                    <h3>You have <strong>{incomeSources}</strong> {incomeSources === 1 ? 'source' : 'sources'} of income, so you'll want your emergency fund to cover <strong>{monthsOfExpenses}</strong> months of expenses.</h3>{' '}<br/>

                    <h3>Based on your monthly expenses of <strong>${monthlyExpenses}</strong>, your savings goal is <strong>${savingsGoal}</strong>.</h3>{' '}<br/>

                    <h3>Because you <strong>{rawInitialSavings > 0 ? `already have $${initialSavings}` : `don't have anything saved yet`}</strong>  in your emergency fund, you need to save {rawInitialSavings > 0 ? 'an additional' : ''} <strong>${savingsDeficit}</strong> to reach your goal.</h3>{' '}<br/>

                    <h3> If you save </h3>
                    <div className="input-cont">
                        <InputGroup.Addon className="dollar-sign">$</InputGroup.Addon>
                        <FormControl
                            id="monthlySavings"
                            className={monthlySavings > rawIncome ? "input-warning dollar-input" : "dollar-input"}
                            defaultValue={formatDollarValues(monthlySavings)}
                            type="text"
                            maxLength="7"
                            onChange={(e)=> {
                                handleUpdateMonthlySavings(e.target.value)
                                e.target.value = formatDollarValues((e.target.value).replace(",",""))
                                let rawSavings = Number((e.target.value).replace(",", ""))
                                document.getElementById("percent-of-income").value = ((rawSavings/rawIncome)*100).toFixed(2)
                            }}
                        />
                    </div>
                    <h3> a.k.a. </h3>
                    <div className="input-cont" id="percent-income-cont">
                        <FormControl
                            id="percent-of-income"
                            className={monthlySavings > rawIncome ? "input-warning dollar-input" : "dollar-input"}
                            defaultValue={((monthlySavings/rawIncome)*100).toFixed(2)}
                            type="number"
                            maxLength="4"
                            min="0"
                            max="100"
                            step=".5"
                            onChange={(e)=> {
                                let newAmount = ((e.target.value)/100)*rawIncome
                                handleUpdateMonthlySavings(newAmount)
                                document.getElementById("monthlySavings").value = formatDollarValues(newAmount)
                            }}
                        />
                        <InputGroup.Addon className="dollar-sign">%</InputGroup.Addon>
                    </div>
                    <h3> of your income every month, you'll have a fully-funded emergency fund in&nbsp;<strong>{Math.ceil(rawSavingsDeficit/monthlySavings)}{' '} months.</strong></h3>



                </div>
            )
        }
}

export default SavingsPlan;
