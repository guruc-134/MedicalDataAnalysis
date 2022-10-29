import React from 'react';
import Grid from '@mui/material/Grid';
import {firebase} from "../../DataBase/firebase.config"
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import  './styles.scss'
import '../../DataBase/dataHandling' 
import YearWise from '../../component/YearWise/YearWise';
import AllYears from '../../component/AllYears/AllYears';
import ImportVsExport from '../../component/ImportVsExport/ImportVsExport';
import {ReactComponent as HomePage} from '../../assets/HomePageSVG.svg'

import PolarAreaChart from '../../component/PolarAreaChart/PolarAreaChart';
// import axios from "axios"
function Home() {
  const logout = ()=>{
    firebase.auth().signOut()
  } 
  return (
    <Grid>
        <div className='logout'>
          <Button onClick={logout}>
            <ExitToAppIcon style={{fontSize:"60px", color:"white"}}/>
          </Button>
        </div>
        <Grid className="landingPage">
          <div className='landingPage_left' style={{width:"80%",margin:"0 auto",marginTop:"-40px"}}>
            <HomePage />
          </div>
        </Grid>
          <Grid className="chartsContainerCanva">
            <YearWise type={"Export"}/>
          </Grid>
          <Grid className="chartsContainerCanva">
            <YearWise type={"Import"}/>
          </Grid>
        <Grid className="chartsContainerCanva">
          <AllYears type={"Export"}/>
        </Grid>
        <Grid className="chartsContainerCanva">
          <AllYears type={"Import"}/>
        </Grid>
        <Grid className="chartsContainerCanva">
        <ImportVsExport/>
        </Grid>
        <Grid className="chartsContainerCanva">
          <PolarAreaChart type={"Import"}/>
        </Grid>
        <Grid className="chartsContainerCanva">
          <PolarAreaChart type={"Export"}/>
        </Grid>

    </Grid>
  );
}

export default Home;
