import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseItemDescription from './ExpenseItemDescription';

function ExpenseItem(props) {

    return (

        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseItemDescription title={props.title} amount={props.amount} location={props.location}></ExpenseItemDescription>

        </div>)
}

export default ExpenseItem;