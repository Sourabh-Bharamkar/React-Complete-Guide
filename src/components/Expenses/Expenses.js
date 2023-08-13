import React,{useState} from "react";
import Card from "../UI/Card";

import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023');

    const expenses = [
        {
            id: 1,
            date: new Date(2023, 5, 16),
            title: 'Car Insurance',
            amount: 500,
            location: 'Kolhapur'
        },
        {
            id: 2,
            date: new Date(2023, 6, 29),
            title: 'Movie',
            amount: 400,
            location: 'Kolhapur'
        },
        {
            id: 2,
            date: new Date(2023, 7, 15),
            title: 'Electric Bill',
            amount: 500,
            location: 'Mumbai'
        },
        {
            id: 2,
            date: new Date(2023, 8, 1),
            title: 'Food',
            amount: 500,
            location: 'Kagal'
        },

    ]

    if (props.newExpense) {
        expenses.push(props.newExpense)
    }

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)

    }

    const expenseItems = expenses.map((expense) => {
        return <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} location={expense.location}></ExpenseItem>
    })


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            {expenseItems}
        </Card>
    )


}

export default Expenses;