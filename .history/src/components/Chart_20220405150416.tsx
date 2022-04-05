import React from 'react'
import { Line } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Title,
} from 'chart.js'
import { calc } from '../utils/calc'

ChartJS.register(LinearScale, PointElement, LineElement, Title, Tooltip)

interface IChartProps {
    day: number
    month: number
}

const Chart: React.FC<IChartProps> = ({ day, month }) => {
    const year = new Date().getFullYear().toString()
    const labels = Array(11)
        .fill(0)
        .map((_, index) => Number(year) - 5 + index)
    const dayNum = calc(day)
    const monthNum = calc(month)
    const data = labels.map((item) =>
        calc(
            calc(dayNum) +
                calc(monthNum) +
                Number(year[0]) +
                Number(year[1]) +
                Number(year[2]) +
                Number(year[0]),
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
