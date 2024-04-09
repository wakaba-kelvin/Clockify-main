import React from 'react'
import { Line } from 'react-chartjs-2';

const LineChartAttendance = ({attendanceData}) => {


    const reportingDays = attendanceData?attendanceData.map(entry => entry.reporting_day):'';
    const counts = attendanceData?attendanceData.map(entry => entry.count):'-';
  
    // Creating data object for Chart.js
    const data = {
      labels: reportingDays,
      datasets: [
        {
          label: 'Attendance',
          data: counts,
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };
  
    // Options for the chart
    const options = {
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'day', // Adjust the unit of time as needed
            displayFormats: {
              day: 'MMM D', // Format for displaying days
            },
          },
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    };
  
    return (
      <div>
        <h2>Attendance Chart</h2>
        <Line data={data} options={options} />
      </div>
    );



}

export default LineChartAttendance


