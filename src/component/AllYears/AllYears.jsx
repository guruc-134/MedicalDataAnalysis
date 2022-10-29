import { Grid } from '@mui/material'
import React , {useState} from 'react'
import VerticalBar from '../barChart/VerticalBar'
// import {firestore} from "../../DataBase/firebase.config"
import {importdata,exportdata} from '../../DataBase/dataHandling'
import { FormControl} from '@mui/material';

function AllYears({type}) {
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
    const fetchData =()=>{
      const obj = {}
      Object.keys(yearCountryMap).forEach(year=>{
        obj[`${year}-rs`] = 0
        obj[`${year}-dlr`] = 0
        obj[`${year}-pound`] = 0
      })
      console.log("calling firebase")
        // firestore.collection("/all").get()
        // .then(resp=>{
        //     resp.docs.forEach(item=>{
        //       if(item.type === type){
        //       obj[`${item.data().year}-rs`] += parseFloat(item.data().trade_in_Rupees) 
        //       obj[`${item.data().year}-dlr`] += parseFloat(item.data().trade_in_USD)
        //       obj[`${item.data().year}-pound`] += parseFloat(item.data().trade_in_USD) * 0.90 
        //     }
        //   }
        //     )
        //     setData(obj)
        //     })
        //     .catch(err=>{
      // console.log("!!🔺")
      if(type=== "Import")
      {
        importdata.forEach(item=>{
          obj[`${item.year}-rs`] += parseFloat(item.trade_in_Rupees) 
          obj[`${item.year}-dlr`] += parseFloat(item.trade_in_USD)
          obj[`${item.year}-pound`] += parseFloat(item.trade_in_USD) * 0.90 
        })
      }
      else{
        exportdata.forEach(item=>{
          obj[`${item.year}-rs`] += parseFloat(item.trade_in_Rupees) 
          obj[`${item.year}-dlr`] += parseFloat(item.trade_in_USD)
          obj[`${item.year}-pound`] += parseFloat(item.trade_in_USD) * 0.90 
        })
      }
      setData(obj)
        }
  return (
    <Grid container style={{width:"80%",margin:"auto"}}>
      <div style={{width:'100%',display:"flex",alignItems:"baseline",flexDirection:"row",justifyContent:"space-between"}}>
          <div>
              <h3>
                Query for statistics of all years
              </h3>
              <p>
              This bar chart represents the total {type}s of India in the past 10 years
              </p>
          </div>
              <Grid >
              <FormControl variant="standard" sx={{ m: 1, minWidth: 150,flexDirection:"row" }}>
          <button onClick={fetchData}> Search </button>
          </FormControl>
              </Grid>
          </div>
      <div>
      </div>
        {data &&
            <VerticalBar data={data} list={Object.keys(yearCountryMap)} year={"all"}  type={"allyears"}/>
        }
    </Grid>
  )
}

export default AllYears