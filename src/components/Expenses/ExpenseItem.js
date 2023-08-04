import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseItemDescription from './ExpenseItemDescription';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const deleteExpenseHandler = (e) => {
        const expenseItem = e.target.parentElement;
        expenseItem.remove();
    }

    return (

        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseItemDescription title={props.title} amount={props.amount} location={props.location}></ExpenseItemDescription>
            <button onClick={deleteExpenseHandler}>Delete</button>

        </Card>
    )
}

export default ExpenseItem;