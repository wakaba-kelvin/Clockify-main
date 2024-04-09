import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const AttendanceChart = ({ reportingData }) => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (reportingData && reportingData.length > 0) {
          const labels = reportingData.map(item => item.reporting_day);
          const earlyCounts = reportingData.map(item => item.reporting_state === 'Early' ? item.count : 0);
          const lateCounts = reportingData.map(item => item.reporting_state === 'Late' ? item.count : 0);
    
          const chartData = {
            labels: labels,
            datasets: [{
              label: 'Early',
              data: earlyCounts,
              backgroundColor: '#36A2EB' // Blue color for "Early"
            }, {
              label: 'Late',
              data: lateCounts,
              backgroundColor: '#FF6384' // Red color for "Late"
            }]
          };
    
          const ctx = chartContainer.current.getContext('2d');
    
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }
    
          chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
              scales: {
                y: {
                  beginAtZero: true,

                  title: {
                    display: true,
                    text: 'Number of Employees' // Y-axis label
                  },
                  ticks: {
                    stepSize: 100, // Define the step size for ticks
                    // You can add more configurations for ticks here
                  }
                }
              }
              // Add any additional options here
            }
          });
        }
    
        return () => {
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }
        };
      }, [reportingData]);
    
      return (
        <div className='chart-div'>
          <h2>Reporting States</h2>
          <canvas ref={chartContainer} width="400" height="400"></canvas>
        </div>
      );






}

export default AttendanceChart






