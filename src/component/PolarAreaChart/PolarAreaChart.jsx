import React ,{useState}from 'react';
// import Chart from 'chart.js/auto';
import { Grid } from '@mui/material'
import { PolarArea } from 'react-chartjs-2';
// import { firestore } from '../../DataBase/firebase.config';
import {importdata,exportdata} from '../../DataBase/dataHandling'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const PolarAreaChart = ({type}) => {
  const [year,setYear] = useState(2021)
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
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
  const options =  {
      onClick: function (evt, item) {
        // if (item[0]) {
        // }      
      },
    }
  const yearList = [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
      const categoryWiseArray = {}
      let data = []
      if(type==='Import') data = importdata
      else data = exportdata
      function generateRandomColor(){
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);   
        return `#${randColor.toUpperCase()}`
    }
      data.forEach(item=>{
        if(item.year === year)
        {

          if(item.category in categoryWiseArray)
          categoryWiseArray[item.category] += parseFloat(item.trade_in_Rupees)
          else
          categoryWiseArray[item.category] = parseFloat(item.trade_in_Rupees)
        }
      })
      console.log(categoryWiseArray)
      
      const catlst = Object.keys(categoryWiseArray)
  const handleChange = (e)=>{
    const {name,value} = e.target
    if(name === "year") setYear(value)
  } 
    const graphDataSets = [{
            label: 'Export in Rupees',
            data: catlst.map(cat=>categoryWiseArray[cat]),
            backgroundColor: catlst.map(item=>generateRandomColor()),
            borderColor: [
              '#80ced6'
            ],
            borderWidth: 3,
          }
        ]
      const graphData = {
        labels: catlst,
        datasets:graphDataSets,
      };
  return(<>
    <div className='header' style={{width:"80%",margin:"auto"}}>
    <div style={{width:'100%',display:"flex",alignItems:"baseline",flexDirection:"row",justifyContent:"space-between"}}>
    <div>
              <h3>
                Query for categorical statistics of any year
              </h3>
              <p>
                This Ploar Area Chart gives a comparision of the total amount of {type}s of India in units of Millions of Dollars category-wise
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
            <button onClick={handleOpen}> Search </button>
          </FormControl>
              </Grid>
          </div>
    </div>
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
          <PolarArea data={graphData} options={options} 
            style={{width:'70vw',margin:'auto'}}
            className="chart polarChart" />
         </Box>
        </Modal>
 
  </>)
}

export default PolarAreaChart