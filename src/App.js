import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const dummyExpenses = [
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
    id: 3,
    date: new Date(2023, 7, 15),
    title: 'Electric Bill',
    amount: 500,
    location: 'Mumbai'
  },
  {
    id: 4,
    date: new Date(2023, 8, 1),
    title: 'Food',
    amount: 500,
    location: 'Kagal'
  },

]

function App() {

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    console.log('In app js');
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });

  }


  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;