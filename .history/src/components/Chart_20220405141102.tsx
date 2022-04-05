import React from 'react'
import { Line } from 'react-chartjs-2'

interface IChartProps {
    day: number
    month: number
    year: number
}

const Chart: React.FC<IChartProps> = ({ day, month, year }) => {
    return (
        <Line
            options={{
                responsive: true,
            }}
            data={{
                labels: [2000, 2001, 2002, 2003],
                datasets: [
                    {
                        borderColor: '#73FF6B',
                        data: 4,
                    },
                    {
                        borderColor: '#73FF6B',
                        data: 1,
                    },
                    {
                        borderColor: '#73FF6B',
                        data: 9,
                    },
                    {
                        borderColor: '#73FF6B',
                        data: 7,
                    },
                ],
            }}
        />
    )
}

export default Chart
