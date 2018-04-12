//src/components/Expenses.js

import React, { Component } from 'react';
import { Link } from 'react-router'
import { Button } from 'react-bootstrap';

import Expense from './Expense'
import TotalExpenses from './TotalExpenses'

const Expenses = ({expenses, handleAddExpense, handleRemoveExpense, handleUpdateExpenseName, handleUpdateExpenseAmount}) =>  {
    return (
            <div id="Expenses">
                <h4 id="expense-header">What are your monthly expenses?</h4>

                <Button
                  id="add-expense-btn"
                  block
                  onClick={(e)=>{
                    let id = `exp_${JSON.stringify(Date.now())}` // set a unique id
                    handleAddExpense(id)
                  }}
                >
                  Add an expense
                </Button>

                <ul id="expense-list">
                  {expenses.map(expense =>
                    <Expense
                      key={expense.id}
                      {...expense}
                      updateExpenseName={handleUpdateExpenseName}
                      updateExpenseAmount={handleUpdateExpenseAmount}
                      removeExpense={handleRemoveExpense}
                    />
                  )}
                </ul>

                <TotalExpenses expenses={expenses} /><br/>

                <Button className="nav-btn" block>
                	 <Link className="link" to="savings-plan">Go to Your Savings Plan</Link>
                </Button>
            </div>
    );
}

export default Expenses;
