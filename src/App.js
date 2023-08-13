import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {


  const [newExpense,setNewExpense]=useState('');


  const addExpenseHandler = (expense) => {
    console.log('In app js');
    console.log(expense);
    setNewExpense(expense) ;
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses newExpense={newExpense}></Expenses>
    </div>
  );
}

export default App;
