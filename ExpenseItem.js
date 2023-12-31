import React, {useState} from 'react';
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem= (props)=> {
   const [title, setTitle] = useState(props.title)
   const clickHandler = (event) =>{
    //  setTitle(event.target.value)
   }
    return (
        <Card className="expense-item">
         <ExpenseDate date = {props.date} />
            <div className = "expense-item__description">
                <h2>{props.title}</h2>
                <div className = "expense-item__price"> ${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem