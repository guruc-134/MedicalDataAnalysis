import { Grid } from '@mui/material'
import React , {useState} from 'react'
import LineChart from '../lineChart/LineChart';
import { FormControl } from '@mui/material';

import {importdata,exportdata} from '../../DataBase/dataHandling'
function ImportVsExport() {
    const [data, setData] = useState(null);
    const yearCountryMap = {2021: ['U S A',
    'CHINA P RP',
    'U ARAB EMTS',
    'SAUDI ARAB',
    'IRAQ',
    'SINGAPORE',
    'HONG KONG',
    'INDONESIA',
    'KOREA RP',
    'AUSTRALIA'],
   2020: ['CHINA P RP',
    'U S A',
    'U ARAB EMTS',
    'HONG KONG',
    'SAUDI ARAB',
    'SINGAPORE',
    'GERMANY',
    'SWITZERLAND',
    'INDONESIA',
    'KOREA RP'],
   2019: ['U S A',
    'CHINA P RP',
    'U ARAB EMTS',
    'SAUDI ARAB',
    'HONG KONG',
    'IRAQ',
    'SINGAPORE',
    'GERMANY',
    'KOREA RP',
    'INDONESIA'],
   2018: ['U S A',
    'CHINA P RP',
    'U ARAB EMTS',
    'SAUDI ARAB',
    'HONG KONG',
    'SINGAPORE',
    'IRAQ',
    'GERMANY',
    'KOREA RP',
    'INDONESIA'],
   2017: ['CHINA P RP',
    'U S A',
    'U ARAB EMTS',
    'SAUDI ARAB',
    'HONG KONG',
    'GERMANY',
    'KOREA RP',
    'INDONESIA',
    'SWITZERLAND',
    'IRAQ'],
   2016: ['CHINA P RP',
    'U S A',
    'U ARAB EMTS',
    'SAUDI ARAB',
    'HONG KONG',
    'GERMANY',
    'SWITZERLAND',
    'INDONESIA',
    'KOREA RP',
    'SINGAPORE'],
   2015: ['CHINA P RP',
    'U S A',
    'U ARAB EMTS',
    'SAUDI ARAB',
    'SWITZERLAND',
    'GERMANY',
    'HONG KONG',
    'KOREA RP',
    'INDONESIA',
    'SINGAPORE'],
   2014: ['CHINA P RP',
    'U S A',
    'U ARAB EMTS',
    'SAUDI ARAB',
    'SWITZERLAND',
    'GERMANY',
    'HONG KONG',
    'INDONESIA',
    'KOREA RP',
    'MALAYSIA'],
   2013: ['CHINA P RP',
    'U S A',
    'U ARAB EMTS',
    'SAUDI ARAB',
    'GERMANY',
    'SWITZERLAND',
    'HONG KONG',
    'INDONESIA',
    'IRAQ',
    'SINGAPORE'],
   2012: ['U ARAB EMTS',
    'CHINA P RP',
    'U S A',
    'SAUDI ARAB',
    'SWITZERLAND',
    'GERMANY',
    'SINGAPORE',
    'IRAQ',
    'INDONESIA',
    'HONG KONG'],
   2011: ['CHINA P RP',
    'U ARAB EMTS',
    'U S A',
    'SAUDI ARAB',
    'SWITZERLAND',
    'SINGAPORE',
    'GERMANY',
    'HONG KONG',
    'INDONESIA',
    'IRAQ']}
  //   const yearCountryMapNOusa = {2021:[
  //   'CHINA P RP',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'IRAQ',
  //   'SINGAPORE',
  //   'HONG KONG',
  //   'INDONESIA',
  //   'KOREA RP',
  //   'AUSTRALIA'],
  //  2020: ['CHINA P RP',
  //   'U ARAB EMTS',
  //   'HONG KONG',
  //   'SAUDI ARAB',
  //   'SINGAPORE',
  //   'GERMANY',
  //   'SWITZERLAND',
  //   'INDONESIA',
  //   'KOREA RP'],
  //  2019:[
  //   'CHINA P RP',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'HONG KONG',
  //   'IRAQ',
  //   'SINGAPORE',
  //   'GERMANY',
  //   'KOREA RP',
  //   'INDONESIA'],
  //  2018:[
  //   'CHINA P RP',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'HONG KONG',
  //   'SINGAPORE',
  //   'IRAQ',
  //   'GERMANY',
  //   'KOREA RP',
  //   'INDONESIA'],
  //  2017: ['CHINA P RP',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'HONG KONG',
  //   'GERMANY',
  //   'KOREA RP',
  //   'INDONESIA',
  //   'SWITZERLAND',
  //   'IRAQ'],
  //  2016: ['CHINA P RP',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'HONG KONG',
  //   'GERMANY',
  //   'SWITZERLAND',
  //   'INDONESIA',
  //   'KOREA RP',
  //   'SINGAPORE'],
  //  2015: ['CHINA P RP',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'SWITZERLAND',
  //   'GERMANY',
  //   'HONG KONG',
  //   'KOREA RP',
  //   'INDONESIA',
  //   'SINGAPORE'],
  //  2014: ['CHINA P RP',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'SWITZERLAND',
  //   'GERMANY',
  //   'HONG KONG',
  //   'INDONESIA',
  //   'KOREA RP',
  //   'MALAYSIA'],
  //  2013: ['CHINA P RP',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'GERMANY',
  //   'SWITZERLAND',
  //   'HONG KONG',
  //   'INDONESIA',
  //   'IRAQ',
  //   'SINGAPORE'],
  //  2012: ['U ARAB EMTS',
  //   'CHINA P RP',
  //   'SAUDI ARAB',
  //   'SWITZERLAND',
  //   'GERMANY',
  //   'SINGAPORE',
  //   'IRAQ',
  //   'INDONESIA',
  //   'HONG KONG'],
  //  2011: ['CHINA P RP',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'SWITZERLAND',
  //   'SINGAPORE',
  //   'GERMANY',
  //   'HONG KONG',
  //   'INDONESIA',
  //   'IRAQ']}
    const fetchData =()=>{
      const obj = {}
      Object.keys(yearCountryMap).forEach(year=>{
        obj[`${year}-import`] = 0
        obj[`${year}-export`] = 0
      })
      console.log("calling firebase")
        // firestore.collection("/all").get()
        // .then(resp=>{
        //   // console.log(resp.docs[0].data())
        //     resp.docs.forEach(item=>{
        //       console.log(item.data().type)
        //     if(item.data().type === "export"){
        //         obj[`${item.data().year}-export`] += parseFloat(item.data().trade_in_Rupees)
        //         // obj[`${item.data().year}-import`] += parseFloat(item.data().trade_in_Rupees) * (Math.random() * 2)
        //     }
        //     else{
        //         obj[`${item.data().year}-import`] += parseFloat(item.data().trade_in_Rupees) 
        //     }
        //     }
        //     )
        //     setData(obj)
        //     })
            importdata.forEach(item=>{
              obj[`${item.year}-import`] += parseFloat(item.trade_in_Rupees) 
            })
            
            exportdata.forEach(item=>{
              obj[`${item.year}-export`] += parseFloat(item.trade_in_Rupees) 
            })
            setData(obj)
        }
  return (
    <Grid container style={{width:"80%",margin:"auto"}}>
        <div style={{width:'100%',display:"flex",alignItems:"baseline",flexDirection:"row",justifyContent:"space-between"}}>
          <div>
              <h3>
                Query for statistics : Imports Vs Exports
              </h3>
              <p>
              Line Chart to compare the import and the export data for various years
              </p>
          </div>
              <Grid >
              <FormControl variant="standard" sx={{ m: 1, minWidth: 150,flexDirection:"row" }}>
          <button onClick={fetchData}> Search </button>
          </FormControl>
              </Grid>
          </div>
     
        {data &&
            <LineChart data={data} list={Object.keys(yearCountryMap)} year={"all"}  type={"allyears"}/>
        }
    </Grid>
  )
}

export default ImportVsExport