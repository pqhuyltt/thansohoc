import React from 'react'
import { Line } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)

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
                        label: 'Dataset 1',
                        borderColor: '#73FF6B',
                        data: 4,
                    },
                    {
                        label: 'Dataset 2',
                        borderColor: '#73FF6B',
                        data: 1,
                    },
                    {
                        label: 'Dataset 3',
                        borderColor: '#73FF6B',
                        data: 9,
                    },
                    {
                        label: 'Dataset 4',
                        borderColor: '#73FF6B',
                        data: 7,
                    },
                ],
            }}
        />
    )
}

export default Chart
