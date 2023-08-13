import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const addExpenseHandler = (expense) => {
    console.log('In app js');
    console.log(expense)
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses></Expenses>
    </div>
  );
}

export default App;
