import './ExpenseForm.css';
import React,{useState} from 'react';
const ExpenseForm=()=>{

    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')

    const titleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler=(e)=>{
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler=(e)=>{
        setEnteredDate(e.target.value)
    }



    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} ></input>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="Number" onChange={amountChangeHandler} ></input>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={setEnteredDate}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;