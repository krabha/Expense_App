import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expense.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';


function Expenses (props){
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }
  return (
    <div>
    <Card className='expenses'>
        <ExpensesFilter 
        selected ={filteredYear} 
        onChangeFliter = {filterChangeHandler}

        />
        {props.items.map((expense) => (
          <ExpenseItem
          title ={expense.title}
          amount = {expense.amount}
          date = {expense.date}
         />
         ))}
    </Card>
    </div>
  )
}

export default Expenses