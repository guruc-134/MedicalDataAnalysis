import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
// import { firestore } from '../../DataBase/firebase.config';

const LineChart = ({data,list}) => {
  const options =  {
      onClick: function (evt, item) {
        // if (item[0]) {
        // }      
      },
    }
    const getData = (type) =>{
       const arr= []
      list.forEach(item=>{
        arr.push(data[`${item}-${type}`])
      })
      return arr
    }
    const graphDataSets = [
          {
            label: 'Export in Rupees',
            data: getData('export'),
            backgroundColor: [
              'red',
            ],
            borderColor: [
              'red',
            ],
            borderWidth: 3,
          },
          {
            label: 'Import in Rupees',
            data: getData('import'),
            backgroundColor: [  
              'black',
            ],
            borderColor: [
              'black'
            ],
            borderWidth: 3,
          }
        ]
      const graphData = {
        labels: list,
        datasets:graphDataSets,
      };
  return(<>
     {false&&<Chart></Chart>}
    <Line data={graphData} options={options} className="chart yearWiseCharts" />
  </>)
}

export default LineChart;