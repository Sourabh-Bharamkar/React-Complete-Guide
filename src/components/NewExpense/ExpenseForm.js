import './ExpenseForm.css';

const ExpenseForm=()=>{

    const titleChangeHandler=(e)=>{
        console.log(e.target.value)
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
                    <input type="Number" ></input>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;