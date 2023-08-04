import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseItemDescription from './ExpenseItemDescription';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const [title,setTitle]=useState(props.title)
    const [amount, setAmount]=useState(props.amount)

    const updateTitleHandler =() => {
        setTitle('Updated!!!')
        console.log(title)
    }

    const updateAmountHandler=()=>{
        setAmount('100$')
    }

    return (

        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseItemDescription title={title} amount={amount} location={props.location}></ExpenseItemDescription>
            <button onClick={updateTitleHandler}>Update Title</button>
            <button onClick={updateAmountHandler}> update Amount</button>

        </Card>
    )
}

export default ExpenseItem;