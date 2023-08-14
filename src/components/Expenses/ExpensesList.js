import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if (!props.items.length) {
        return (
            <h2 className='expenses-list__fallback'>No Expenses Found</h2>
        )
    }

    const expenseItems = props.items.map((expense) => {
        return <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} location={expense.location}></ExpenseItem>
    })

    return (
        <ul className='expenses-list'>
            {expenseItems}
        </ul>

    )
}

export default ExpensesList;