import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredLocation, setEnteredLocation] = useState('')

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const locationChangeHandler = (e) => {
        setEnteredLocation(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
            location: enteredLocation
        }

        // console.log(expenseData)
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredLocation('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} ></input>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="Number" value={enteredAmount} onChange={amountChangeHandler} ></input>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>

                <div className="new-expense__control">
                    <label>Location</label>
                    <input type="text" value={enteredLocation} onChange={locationChangeHandler}></input>
                </div>

            </div>

            <div className="new-expense__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>

        </form>
    )
}

export default ExpenseForm;