import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {

    const dataPointsValues=props.dataPoints.map((dataPoint)=>{
        return dataPoint.value;
    })


    const totalMaxValue=Math.max(...dataPointsValues);
    console.log(totalMaxValue)


    return (
        <div className='chart'>
            {
                props.dataPoints.map((dataPoint) => {
                    return <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        label={dataPoint.label}
                        maxValue={totalMaxValue} >
                    </ChartBar>
                })
            }

        </div>
    )
}

export default Chart;