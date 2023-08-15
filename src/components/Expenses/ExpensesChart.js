import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'April', value: 0 },
        { label: 'May', value: 0 },
        { label: 'June', value: 0 },
        { label: 'July', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sept', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    props.expenses.forEach(expense => {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount; //satrting jan=> 0, feb=>1
    });


    return (

        <Chart dataPoints={chartDataPoints}></Chart>

    )
}

export default ExpensesChart;