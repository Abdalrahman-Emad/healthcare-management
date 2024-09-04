import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ChartComponent = ({ data }) => {
    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#333',
                },
            },
            title: {
                display: true,
                text: 'Dashboard Overview',
                color: '#198754', 
                font: {
                    size: 18,
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    color: '#333', 
                },
                grid: {
                    color: '#e9ecef', 
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#333', 
                },
                grid: {
                    color: '#e9ecef', 
                },
            },
        },
    };

    return (
        <div className="chart-container">
            <Bar data={data} options={options} />
        </div>
    );
};

export default ChartComponent;
