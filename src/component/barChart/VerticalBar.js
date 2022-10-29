import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import './styles.css'
const VerticalBar = ({data,list,type}) => {
  const options =  {
      onClick: function (evt, item) {
        // if (item[0]) {
        // }      
      },
    }
  const getCountryWiseData = ()=>{
    const obj = {}
    list.forEach(country=>obj[country] = 0)
    data.forEach(item=>{
      obj[item.country] += parseFloat(item.trade_in_Rupees)
    })
    // console.log(obj)
    return list.map(country=>obj[country])
  }
  const getYearTotalData = (key)=>{
    return list.map(year=>data[`${year}-${key}`])
  }

  const graphDataSets = {
    "yearwise":[
      {
        label: 'in Million Dollars',
        data: type==="yearwise"?getCountryWiseData():[],
        backgroundColor: [
          '#82b74b',
          '#7e4a35',
          '#622569',
          '#c94c4c',
          '#80ced6',
          '#ffcc5c',
        ],
        borderColor: [
          'white'
        ],
        borderWidth: 1,
      },
    ],
    "allyears":[
      {
        label: 'in Rupees',
        data: getYearTotalData('rs'),
        backgroundColor: [
          '#622569',
        ],
        borderColor: [
          'white'
        ],
        borderWidth: 1,
      },
      {
        label: 'in Dollars',
        data: getYearTotalData('dlr'),
        backgroundColor: [  
          '#ffcc5c',
        ],
        borderColor: [
          'white'
        ],
        borderWidth: 1,
      },
      {
        label: 'in Pound Sterlling',
        data: getYearTotalData('pound'),
        backgroundColor: [  
          '#c94c4c',
        ],
        borderColor: [
          'white'
        ],
        borderWidth: 1,
      },
    ]
  }
  const graphData = {
    labels: list,
    datasets:graphDataSets[type],
  };
  
  return(<>
    <div className='header'>
    </div>
    {console.log(graphData)}
    
    {false&&<Chart></Chart>}
    <Bar data={graphData} options={options} className="chart yearWiseCharts" />
  </>)
}

export default VerticalBar;