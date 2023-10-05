import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
  const onSaveExpenseDataHandler =(eneteredExpenseData) =>{
    const expenseData = {
      ...eneteredExpenseData,
      id: Math.random.toString()
    }
    props.onAddExpense(expenseData);
  }

  return (
    <div className='new-expense'>
     <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
