import { Grid } from '@mui/material'
import React , {useState} from 'react'
import VerticalBar from '../barChart/VerticalBar'
// import {firestore, firebase} from "../../DataBase/firebase.config"
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import { unstable_batchedUpdates } from 'react-dom';
// import Button from '@mui/material/Button';
import {importdata,exportdata} from '../../DataBase/dataHandling'
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
function YearWise({type}) {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height:"80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [year,setYear] = useState(2021)
  const yearList = [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
    const [data, setData] = useState(null);
  //   const yearCountryMapwithUSA = {2021: ['U S A',
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
  //   'U S A',
  //   'U ARAB EMTS',
  //   'HONG KONG',
  //   'SAUDI ARAB',
  //   'SINGAPORE',
  //   'GERMANY',
  //   'SWITZERLAND',
  //   'INDONESIA',
  //   'KOREA RP'],
  //  2019: ['U S A',
  //   'CHINA P RP',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'HONG KONG',
  //   'IRAQ',
  //   'SINGAPORE',
  //   'GERMANY',
  //   'KOREA RP',
  //   'INDONESIA'],
  //  2018: ['U S A',
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
  //   'U S A',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'HONG KONG',
  //   'GERMANY',
  //   'KOREA RP',
  //   'INDONESIA',
  //   'SWITZERLAND',
  //   'IRAQ'],
  //  2016: ['CHINA P RP',
  //   'U S A',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'HONG KONG',
  //   'GERMANY',
  //   'SWITZERLAND',
  //   'INDONESIA',
  //   'KOREA RP',
  //   'SINGAPORE'],
  //  2015: ['CHINA P RP',
  //   'U S A',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'SWITZERLAND',
  //   'GERMANY',
  //   'HONG KONG',
  //   'KOREA RP',
  //   'INDONESIA',
  //   'SINGAPORE'],
  //  2014: ['CHINA P RP',
  //   'U S A',
  //   'U ARAB EMTS',
  //   'SAUDI ARAB',
  //   'SWITZERLAND',
  //   'GERMANY',
  //   'HONG KONG',
  //   'INDONESIA',
  //   'KOREA RP',
  //   'MALAYSIA'],
  //  2013: ['CHINA P RP',
  //   'U S A',
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
  //   'U S A',
  //   'SAUDI ARAB',
  //   'SWITZERLAND',
  //   'GERMANY',
  //   'SINGAPORE',
  //   'IRAQ',
  //   'INDONESIA',
  //   'HONG KONG'],
  //  2011: ['CHINA P RP',
  //   'U ARAB EMTS',
  //   'U S A',
  //   'SAUDI ARAB',
  //   'SWITZERLAND',
  //   'SINGAPORE',
  //   'GERMANY',
  //   'HONG KONG',
  //   'INDONESIA',
  //   'IRAQ']}
    const yearCountryMap = {2021:[
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
      'U ARAB EMTS',
      'HONG KONG',
      'SAUDI ARAB',
      'SINGAPORE',
      'GERMANY',
      'SWITZERLAND',
      'INDONESIA',
      'KOREA RP'],
     2019:[
      'CHINA P RP',
      'U ARAB EMTS',
      'SAUDI ARAB',
      'HONG KONG',
      'IRAQ',
      'SINGAPORE',
      'GERMANY',
      'KOREA RP',
      'INDONESIA'],
     2018:[
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
      'U ARAB EMTS',
      'SAUDI ARAB',
      'HONG KONG',
      'GERMANY',
      'KOREA RP',
      'INDONESIA',
      'SWITZERLAND',
      'IRAQ'],
     2016: ['CHINA P RP',
      'U ARAB EMTS',
      'SAUDI ARAB',
      'HONG KONG',
      'GERMANY',
      'SWITZERLAND',
      'INDONESIA',
      'KOREA RP',
      'SINGAPORE'],
     2015: ['CHINA P RP',
      'U ARAB EMTS',
      'SAUDI ARAB',
      'SWITZERLAND',
      'GERMANY',
      'HONG KONG',
      'KOREA RP',
      'INDONESIA',
      'SINGAPORE'],
     2014: ['CHINA P RP',
      'U ARAB EMTS',
      'SAUDI ARAB',
      'SWITZERLAND',
      'GERMANY',
      'HONG KONG',
      'INDONESIA',
      'KOREA RP',
      'MALAYSIA'],
     2013: ['CHINA P RP',
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
      'SAUDI ARAB',
      'SWITZERLAND',
      'GERMANY',
      'SINGAPORE',
      'IRAQ',
      'INDONESIA',
      'HONG KONG'],
     2011: ['CHINA P RP',
      'U ARAB EMTS',
      'SAUDI ARAB',
      'SWITZERLAND',
      'SINGAPORE',
      'GERMANY',
      'HONG KONG',
      'INDONESIA',
      'IRAQ']}
    const getYearData =()=>{
      console.log("hello")
        const arr = []
        yearCountryMap[year].forEach(country=>{
          console.log("fetching from firebase")
        if(type=== "Import")
        {
          importdata.forEach(item=>{
            if(item.year === year && item.country === country)
            {
              arr.push(item)
            }
          })
          unstable_batchedUpdates(()=>{ 
                setOpen(true);
                setData(arr)
              })
        }
        else
        {
          exportdata.forEach(item=>{
            if(item.year === year && item.country === country)
            {
              arr.push(item)
            }
          })
          unstable_batchedUpdates(()=>{ 
                setOpen(true);
                setData(arr)
              })
        }
        // firestore.collection(`data/${year}/${country}`).get()
        // .then(resp=>{
        //     resp.docs.forEach((item,ind)=>{
        //     arr.push(item.data())
        //     })
        //   unstable_batchedUpdates(()=>{ 
        //     setOpen(true);
        //     setData(arr)
        //   })
        // })
        //   .catch(err=>{
        //     console.log(err)
        //     setData(arr)
        //   })
      })
       }
       const handleChange = (e)=>{
        const {name,value} = e.target
        if(name === "year") setYear(value)
      }   
  return (
    <Grid container style={{flexDirection:"row",width:'80%',margin:"auto"}}>
        <div style={{width:'100%',display:"flex",alignItems:"baseline",flexDirection:"row",justifyContent:"space-between"}}>
          <div>
              <h3>
                Query for statistics of any year
              </h3>
              <p>
                This Bar Chart gives an over view of the total amount of {type}s of India.
              </p>
          </div>
              <Grid >
              <FormControl variant="standard" sx={{ m: 1, minWidth: 150,flexDirection:"row" }}>
            <InputLabel id="demo-simple-select-standard-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              sx={{ minWidth: 100,flexDirection:"row" }}
              value={year}
              onChange={handleChange}
              name="year"
            >
              {
                yearList.map(year=>
                  <MenuItem value={year} key={year}>{year}</MenuItem>)
              }
            </Select>
          <button onClick={getYearData}> Search </button>
          </FormControl>
              </Grid>
          </div>
        {data &&
         <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
         <Box sx={style}>
          <h2 align="center">
            {type}s {type==='import'?'to':"from"} India {type!=='import'?'to':"from"} top 10 countries for the year {year}
          </h2>
         <VerticalBar data={data} list={yearCountryMap[year]} year={year} 
            type={"yearwise"}
            />
         </Box>
        </Modal>
            
        }
    </Grid>
  )
}

export default YearWise