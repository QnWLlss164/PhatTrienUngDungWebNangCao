import React, { useEffect, useState } from 'react'
import { PostAPI } from '../../api/postAPI'
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import classes from './Chart.module.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function ChartPost() {
    const token = localStorage.getItem("token");
    const [error, setError] = useState(false);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        PostAPI.getChart(token, (err, data) => {
            if (err) setError(err.message)
            else {
                const topPosts = [...data]
                    .sort((a, b) => (b.views || 0) - (a.views || 0))
                    .slice(0, 7);

                const colors = [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ];
                setChartData({
                    labels: topPosts.map(post => post.title),
                    datasets: [
                        {
                            data: topPosts.map(post => post.views),
                            backgroundColor: topPosts.map((_, i) => colors[i % colors.length]),
                            borderColor: topPosts.map((_, i) => colors[i % colors.length].replace('0.6', '1')),
                            borderWidth: 1,
                            barThickness: 40,
                        },
                    ],
                });
            }
        })
    }, [])
    if (!chartData) return
    return (
        <div className={classes.chart}>
            <h2>
                Thống kê Lượt xem bài Post
            </h2>
            <Bar data={chartData} options={{
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        // text: 'Lượt xem theo bài viết',
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            display: false, // Ẩn tên dưới cột
                        },
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            }} />
        </div>
    )
}
