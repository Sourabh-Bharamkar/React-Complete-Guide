import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from './components/Expenses/ExpensesFilter'

function App() {


  const [newExpense,setNewExpense]=useState('');
  const [filteredYear,setFilteredYear]=useState('2023')


  const addExpenseHandler = (expense) => {
    console.log('In app js');
    console.log(expense);
    setNewExpense(expense) ;
  }

  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)

  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
      <Expenses newExpense={newExpense}></Expenses>
    </div>
  );
}

export default App;
