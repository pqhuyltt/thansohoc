import React from 'react'
import { Line } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from 'chart.js'

ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,

    Tooltip,
)

interface IChartProps {
    day: number
    month: number
    year: number
}

const Chart: React.FC<IChartProps> = ({ day, month, year }) => {
    return (
        <Line
            className="chart"
            width="500px"
            height="200px"
            options={{
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                borderColor: '#333',
            }}
            data={{
                labels: [2000, 2001, 2002, 2003],
                datasets: [
                    {
                        label: 'Số năm cá nhân',
                        borderColor: '#73FF6B',
                        data: [4, 5, 8, 7],
                    },
                ],
            }}
        />
    )
}

export default Chart
