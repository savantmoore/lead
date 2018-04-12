//src/components/Expense.js

import React from 'react';
import {FormControl, InputGroup } from 'react-bootstrap';
import {formatDollarValues} from '../helpers'


const Expense = ({key, name, amount, id, updateExpenseName, updateExpenseAmount, removeExpense}) =>  {
    return (
        <li className="expense-item">

            <FormControl
                className="expense-name"
                type="text"
                defaultValue={name}
                placeholder="Expense item"
                onChange={(e)=>
                    updateExpenseName(id, e.target.value)
                }
            />

            <InputGroup className="expense-amt-group">
                <InputGroup.Addon className="dollar-sign">$</InputGroup.Addon>

                <FormControl
                    className="expense-amt"
                    type="text"
                    defaultValue={formatDollarValues(amount)}
                    onChange={(e)=> {
                        e.target.value = formatDollarValues((e.target.value).replace(",",""))
                        updateExpenseAmount(id, Number((e.target.value).replace(",","")))
                    }}
                />

                <span
                    className="remove-expense"
                    onClick={(e)=> removeExpense(id)}
                >

                x</span>
            </InputGroup>

        </li>
    );
}

export default Expense;
