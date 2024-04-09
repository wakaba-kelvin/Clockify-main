import React from 'react'
import {Pie} from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import  { useEffect, useRef } from 'react';
import '../GenderChart/GenderChart.scss'


const GenderChart = ({genderData}) => {
    console.log(genderData)
  
    
      const chartContainer = useRef(null);
      const chartInstance = useRef(null);
    
      useEffect(() => {
        if (genderData && genderData.length > 0) {
          const labels = genderData.map(item => item.gender);
          const data = genderData.map(item => item.count);
    
          const chartData = {
            labels: labels,
            datasets: [{
              data: data,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], 
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
          };
    
          const ctx = chartContainer.current.getContext('2d');
    
        
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }
    
         
          chartInstance.current = new Chart(ctx, {
            type: 'pie',
            data: chartData,
            options: {
             
            }
          });
        }
    
      
        return () => {
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }
        };
      }, [genderData]);
    
      return (
        <div className='chart-div'>
          <h2>Gender Distribution</h2>
          <canvas ref={chartContainer} width="400" height="400"></canvas>
        </div>
      );
    };
    
    


export default GenderChart



