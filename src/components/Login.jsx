import React from 'react'
import {Grid,Typography,Button,Paper,Input} from "@material-ui/core"
import girl from "../images/girl.jpg";
import { useState } from 'react'
import {eye} from 'react-icons-kit/feather/eye'
import logo from "../images/Logo.svg";
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'



const Login = () => {

  const [type, setType]=useState('');
  const [icon, setIcon]=useState(eyeOff);

  const ToggleEye =()=>{
    if(type==='password'){
      setIcon(eye);      
      setType('text');
    }
    else{
      setIcon(eyeOff);     
      setType('password');
    }
  }

  return (
    <>
    <Paper style={{height:"100vh",background:"white"}} className='root'>
      <Grid container >
      <Grid item lg={5} xl={5} md={5} sm={12} xs={12}>
        <Grid container>

        <Paper elevation={8}  style={{height:"97vh",marginLeft:"2%",marginTop:"1%",marginRight:"1%"}}>

        <Grid item 
        lg={5} xl={5} md={4} sm={10} xs={10}
         style={{marginTop:"5%",marginLeft:"10%"}}  className='logo' >
          <img src={logo}  style={{maxWidth: "100%", height: "auto",padding: 0,margin: 0}} alt="logopic" />
        </Grid>

        <Grid item lg={8} xl={8} md={8} sm={12} xs={11}
        style ={{marginTop:"30%",marginLeft:"10%",marginRight:"20%"}}>
          <Typography variant='h6'style={{ fontFamily:"Nunito,Roboto,Helvetica Neue,Arial,sans-serif",fontSize:"300%"}}>
            Hi, Welcome Back
          </Typography>
        </Grid>

        <Grid item 
        lg={6} xl={6} md={6} sm={11} xs={11} 
        style={{marginTop:"5%",marginLeft:"10%",marginRight:"20%"}}  className='girl'>
          <img src={girl} style={{width: "110%", height: "auto",padding: 0,margin: 0}} alt="girlpic" />
        </Grid>

        </Paper>
        
        </Grid>
      </Grid>


      <Grid item lg={7} xl={7} md={7} sm={12} xs={12}>
        <Paper style={{height:"95vh",marginLeft:"1%",marginRight:"2%"}}>
          <Grid item lg={8} xl={8} md={7} sm={8} xs={12} 
          style={{marginTop:"1%",marginLeft:"15%",paddingTop:"15%"}}>
            <Typography variant='h5'
             style={{fontFamily:"Nunito,Roboto,Helvetica Neue,Arial,sans-serif",fontSize:"270%",marginRight:"10%"}}>
              Sign in to InfiniumDevIO
            </Typography>
          </Grid>

          <Grid item lg={6} xl={6} md={6} sm={8} xs={12}
          style={{marginTop:"2%",marginLeft:"15%"}}>
            <Typography variant='h3' style={{fontSize:"130%"}}>
              Enter your Details Below
            </Typography>
          </Grid>

          
          <Grid item lg={8} xl={8} md={8} sm={8} xs={12}
          style={{marginTop:"2%",marginLeft:"15%"}}>
          <Input style={{marginTop:"1%",borderRadius:"10px",width:"80%",padding:"2%",border:"1px solid grey"}}
           label="Email Address" type='email' placeholder="Email Address" variant="outlined"  required/>

          <Input style={{marginTop:"1%",borderRadius:"10px",padding:"2%" ,width:"80%",border:"1px solid grey"}} 
          label="Password" placeholder="Password" type={type} variant="outlined"  required/>

          <span onClick={ToggleEye}><Icon icon={icon} size={22} style={{marginLeft:"1%"}} /></span>

          </Grid>

          <Grid item lg={8} xl={8} md={8} sm={8} xs={8} >
          <Button variant='contained' style={{
            borderRadius:"15px",width:"80%",background:"gold",marginLeft:"22%",marginTop:"3%",padding:"2%"}}>
          Login
          </Button>
          </Grid>



        </Paper>
        

      </Grid>
      </Grid>
    
    
    
    
    
    
    </Paper>
      
    </>
  )
}

export default Login
