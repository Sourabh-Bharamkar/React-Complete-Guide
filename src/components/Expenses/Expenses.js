import React,{useState} from "react";
import Card from "../UI/Card";

import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)

    }

    const filteredExpenses=props.items.filter((expense)=>{
        return filteredYear===expense.date.getFullYear().toString()
            
    })

    const expenseItems = filteredExpenses.map((expense) => {
        return <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} location={expense.location}></ExpenseItem>
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            {expenseItems}
        </Card>
    )


}

export default Expenses;