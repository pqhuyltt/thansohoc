import React from 'react'
import { Line } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Title,
    CategoryScale,
    Legend,
} from 'chart.js'
import { calc } from '../utils/calc'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

interface IChartProps {
    day: number
    month: number
}

const Chart: React.FC<IChartProps> = ({ day, month }) => {
    const year = new Date().getFullYear()
    const labels = Array(11)
        .fill(0)
        .map((_, index) => year - 5 + index)
    const dayNum = calc(day)
    const monthNum = calc(month)
    const data = labels.map((item) =>
        calc(
            dayNum +
                monthNum +
                Number(item.toString()[0]) +
                Number(item.toString()[1]) +
                Number(item.toString()[2]) +
                Number(item.toString()[3]),
        ),
    )

    return (
        <Line
            className="chart"
            width="500px"
            height="200px"
            options={{
                color: '#fff',
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        position: 'bottom',
                        text: 'Chu kỳ vận só của bạn',
                        color: '#fff',
                    },
                },

                borderColor: '#D9DBE0',
            }}
            data={{
                labels,
                datasets: [
                    {
                        label: 'Số năm cá nhân',
                        borderColor: '#73FF6B',
                        borderWidth: 4,
                        data,
                    },
                ],
            }}
            color="#fff"
        />
    )
}

export default Chart
