import React, { useContext } from 'react';
import ChartComponent from './ChartComponent'; // Adjust the path if necessary
import { PatientContext } from '../../context/PatientContext';
import { AppointmentContext } from '../../context/AppointmentContext';
import { StaffContext } from '../../context/StaffContext';

const DashboardChart = () => {
    const { patients } = useContext(PatientContext);
    const { appointments } = useContext(AppointmentContext);
    const { staff } = useContext(StaffContext);

    // Prepare data for the chart
    const chartData = {
        labels: ['Patients', 'Appointments', 'Staff'], // X-axis labels
        datasets: [
            {
                label: 'Counts',
                data: [patients.length, appointments.length, staff.length], // Dynamic counts
                backgroundColor: 'rgba(0, 154, 154, 0.2) !important',
                borderColor: 'rgba(0, 154, 154, 1)',
                borderWidth: 1, 
            },
        ],
    };

    return (
        <div className="dashboard">
            <div className="card">
                <h3>Overview</h3>
                <p>Check the statistics of patients, appointments, and staff.</p>
            </div>
            <div className="chart-container">
                <ChartComponent data={chartData} />
            </div>
        </div>
    );
};

export default DashboardChart;
