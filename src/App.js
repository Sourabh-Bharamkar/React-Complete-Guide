import ExpenseItem from "./components/ExpenseItem";


function App() {
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
    }
  ]

  const expenseItems = expenses.map((expense) => {
    return <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} location={expense.location}></ExpenseItem>
  })

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenseItems}
    </div>
  );
}

export default App;
