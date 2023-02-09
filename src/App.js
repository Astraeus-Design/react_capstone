import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect, useRef } from "react";
import {Link as rLink} from 'react-router-dom';
import {Router as rRouter} from 'react-router-dom';
import {Routes as rRoutes} from 'react-router-dom';
import {Route as rRoute} from 'react-router-dom';
import axios from "axios";
import GetUsers from './getHangouts';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ViewUsers from './pages/view';  
import UserCard from './components/userCard/userCard';
import UserCardList from './components/userCardList/userCardList';
import Registration from './pages/register';
import Banner from './components/Banner/Banner';

//import { Link } from '@mui/material';


function App() {

  // following constants are used for creating interests and looking for data

const array1=['keep fit,darts','bowls,reading,photography','theatre,literature','dancing,gardening,art','diy'];
const array2=['knitting','karate,triathlon','swimming','car mechanics,woodwork','local history,long walks'];
const array3=['antiques,classical music','gaming','extreme Hedonism and debauchery,','playing guitar','cycling,astronomy,natural sciences'];

const array4=['Cinema trips,car trips, maybe share a holiday',
              'Cycle touring partner, share foreign travel, go to restaurants,Rockclimbing',
              'Share Quiet nights in, go dog walking',
              'House renovating, motorcycling, going to vintage car shows, strength training partner',
              'Someone to go clubbing with,Getting plastered and having a laugh,maybe finding a soul mate,someone who doesnt mind children'];

const [userData, setUserData] = useState({rxData:[],dataInvalid:true});         // log api data
//const [loading, setLoading] = useState(false);
//const [error, setError] = useState(null);
const url='https://www.randomuser.me/api/?results=100';
              
let userObj=[];              
let rxError=true;
let loading='true';
let recieved=false;
const userProfiles=useRef(userObj);              

  // first task is to acquire a database of registered users
  // for demo purposes these are random profiles merged
  // with a random interests and random looking for data



// using url attempt to get database of registered users

 useEffect(() => {

  let myData=[];
  console.log('entering the async useffect');
 
  // only execute code if no database exists  

  if (!(localStorage.getItem('userDataBase'))){
             (async ()=>{
              
              try {
                   console.log('in async function');
                   loading=true; // used to indicate await of data
                   const response = await axios.get(url);
                   // when response arrives get data
                   if (response.status===200){
                      myData = response.data;
                      rxError=false;
                       console.log('received a 200 ',myData);
                   
                       //setUserData({myData,rxError});    // set state variable 
                       console.log('state var set, rxError is ',rxError);
                       loading=false;
                   }
                   else console.log('in not 200 ',response.status);
               } catch (error) {
                 rxError=true;
                 myData=[];
                 setUserData({myData,rxError});    // set state variable 
                 console.log('had an error ',error);
                 console.log(error.response);
                 alert('Error trying to connect with server please reload page');
                 loading=false;
              }


              console.log('about to test rxError in final section');
              // wait for loading to complete
  
              
  
              if (!(rxError)){
                console.log(userData);
                userObj=myData.results;
            
                const rnd5=()=>(Math.floor(Math.random() * 5));
            
                // if data obtained add extra fields for interests, looking for
                console.log('data is ',userObj);
                let tempUsers=userObj;
                console.log(tempUsers);
              
                tempUsers.forEach((element,index,array)=>{

                  // ensure ages are always > 16yrs

                  if (array[index].dob.age<16){
                    array[index].dob.age=16+(Math.floor(Math.random() * 45));
                  }
                  // add fake interests etc to each record
                  let userExtras={userInterests:array1[rnd5()]+','+array2[rnd5()]+','+array3[rnd5()],
                  userWants:array4[rnd5()]};
                  array[index]={...array[index],userExtras};
                  console.log(array[index]);
                  });

                  
                  // store data in local storage if not already present

                //  if (!localStorage.getItem('userDataBase'))
                //  {
                    /* create new data in local storage as a cached item */
     
                    localStorage.setItem('userDataBase', JSON.stringify(tempUsers));
                    userProfiles.current=tempUsers;      // use userProfiles as re-mapping storage
                    setUserData({tempUsers,rxError});    // set state
               //   };
                  
              }
              else(console.log('errors encountered in data acquisition'));


            })();          
      }
      else
      {
        userObj=JSON.parse(localStorage.getItem('userDataBase')); 
        console.log(userObj);
        const { gender,name,location,dob,picture,userExtras}=userObj[0];
        console.log(gender);
        console.log(name.first,' ',name.last);
        console.log(location.country);
        console.log(dob.age);
        console.log(userExtras.userInterests);
        console.log(userExtras.userWants);
        userProfiles.current=userObj;
        rxError=false;
        setUserData({userObj,rxError});    // set state
      }    

          },[]);    // end of useEffect

 // const userObj=JSON.parse(localStorage.getItem('userDataBase'));






  // return main landing page 
  console.log('users are ',userProfiles.current);
  return (

//uncomment each commented section to view page content

  // form component this is Register page 
/*
    <div className='Form'>
  
       <Registration /> 
    </div> 
*/
 // Hang-out UserCardList display..... view contacts page in effect if routing can be resolved. This is view Hang-outs page.

 //      <div><UserCardList usersInfo={userProfiles.current}/></div>  
   
   
// This is the main landing page for the three buttons that should have linked site together. I have struggled to get mui button links working with react-router having tried 3 or 4 different ways. 

  
    <div className="App">
      <div className="titleBlock">
         <Banner textObj={{title:'Looking For Me?',strapline:'The PREMIER site to find new friends and hang-outs'}} />

      <div className="navButtons">
        <Stack
           direction={{ xs: 'column', sm: 'row' }}
           spacing={{ xs: 3, sm: 5, md: 8 }}
           justifyContent="center"
           marginTop='100px'>
          
           <Button className="b1" size="large" variant="contained" sx={{fontSize: 24}}>Register</Button>
           <Button className="b1" size="large" variant="contained" sx={{fontSize: 24}}>View Hang-outs</Button>
           <Button className="b1" size="large" variant="contained" sx={{fontSize: 24}}>Messages</Button>


                   
        </Stack>
      </div>
    </div>
  </div> 
  );
}

export default App;
