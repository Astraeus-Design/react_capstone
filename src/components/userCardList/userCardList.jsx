/*import { Component } from "react";*/
import React from 'react';
import {useState,useRef} from 'react';
import UserCard from "../userCard/userCard";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';



function UserCardList(props){

    const { usersInfo } = props;
    console.log('cardlist users props ',usersInfo);
    const [remappedUsers,setRemapped]=useState(usersInfo);
    const remapRequired=useRef(true);  // initially true so immediate update

    const [toggle1,setToggle1State]=useState('All');
    const [toggle2,setToggle2State]=useState('All');
 
    console.log('in the card list function',remappedUsers
    );

// event handlers for toggle button changes gender and age group

  const handleChange1=(e)=>{
     console.log(e.target.value);
     
   //  remapArray();
     remapRequired.current=true; // indicate a remapping update, see note below
     setToggle1State(e.target.value);

  }
  
  
  const handleChange2=(e)=>{
    console.log(e.target.value);
    remapRequired.current=true; // indicate a remapping update, not currently used as toggle1+2 are adequate for logic required
    setToggle2State(e.target.value);

 }

 // if a remap is required then perform it before rendering

  let baseArray=usersInfo;
  let tempArray1=[];
  let tempArray2=[];


      if ((toggle1==='All')&&(toggle2==='All')){
         //setRemapped(usersInfo);  // reset back to original data
         
         tempArray2=usersInfo;
      } 
      else{


        console.log(toggle1,toggle2);
        switch(toggle1){
          case 'male':
                       baseArray.forEach((user)=>{
                       if ((user.gender)==='male') tempArray1.push(user)
                       });
                       break;
          case 'female':
                       baseArray.forEach((user)=>{
                       if (user.gender==='female') tempArray1.push(user)
                       });                        

                      break;
          default:
                  tempArray1=baseArray;  
                     break;
        }

        console.log('temparray is ',tempArray1);
        
        switch(toggle2){
          case '1830':
                       tempArray1.forEach((user)=>{
                       if ((user.dob.age>=18)&&(user.dob.age<=30)) tempArray2.push(user)
                       });
                       break;
          case '3155':
                       tempArray1.forEach((user)=>{
                        if ((user.dob.age>=30)&&(user.dob.age<=55)) tempArray2.push(user)
                      });
                      break;
          case '55+':
                        tempArray1.forEach((user)=>{
                         if (user.dob.age>55) tempArray2.push(user)
                       });
                       break;                      
          default:
                     tempArray2=tempArray1;
                     break;
        }        
        console.log('temparray2 is ',tempArray2);
        
      //  setRemapped(tempArray2);
        

      }
     // remapRequired.current=false;
 // }

 // now render full user profile cards referencing the mui Card in userCard.jsx for each individual person.    

    return (

      <div className="userCard-list">
       
         <div className="titleBlock">
           <Box sx={{
             width: '75%',
             height: '10%',
             backgroundColor: 'primary.main',
             mx:'auto',
             borderRadius:'10px',
             marginTop:'15px'
           }}>
          
           <Typography className="mainHeader" variant="h3" sx={{color:'white',padding:'10px',textAlign:'center'}}>Looking For Me?</Typography>

           <Typography className="subHeader" variant="h5" sx={{color:'black',padding:'10px',textAlign:'center',marginTop:'15px',marginBottom:'10px'}}>The PREMIER site to find new friends and hang-outs</Typography>        
         </Box>
      </div>

    <Stack
        direction={{ xs: 'row', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
           justifyContent="center"
           marginTop='15px'>

     <ToggleButtonGroup className="genderGroup"
       color="primary"
       value={toggle1}
       exclusive
       onChange={handleChange1}
       aria-label="Platform"
     >
      <ToggleButton value="All">All</ToggleButton>
      <ToggleButton value="male">Male</ToggleButton>
      <ToggleButton value="female">Female</ToggleButton>
    </ToggleButtonGroup>


    <ToggleButtonGroup className="ageGroup"
       color="primary"
       value={toggle2}
       exclusive
       onChange={handleChange2}
       aria-label="Platform"
     >
      <ToggleButton value="All">All</ToggleButton>
      <ToggleButton value="1830"> 18-30yrs</ToggleButton>
      <ToggleButton value="3155">31-55yrs</ToggleButton>
      <ToggleButton value="55+">over 55yrs</ToggleButton>
    </ToggleButtonGroup>    





    </Stack>

         <Stack
           direction={{ xs: 'column', sm: 'column', md:'row' }}
           spacing={{ xs: 1, sm: 1, md: 1 }}
           justifyContent="flex-start"
           marginTop='15px' sx={{ flexWrap: 'wrap', gap: 1 }}>

          {tempArray2.map((user) => {
            return <UserCard userData={user} />;
          })}

        </Stack>
      </div>
    );
}

export default UserCardList;