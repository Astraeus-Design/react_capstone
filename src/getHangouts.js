import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

// function to acquire random users representing registered users

function GetUsers(){

const [userData, setUserData] = useState([]);         // log api data
//const [loading, setLoading] = useState(false);
//const [error, setError] = useState(null);
const url='https://www.randomuser.me/api/?results=5';


let error='';
let loading='';
let recieved=false;


// using url attempt to get database of registered users

 useEffect(() => {

               console.log('entering the async useffect');
 /*              async function fetchUsers(){
               try {
                    console.log('in async function');
                    const response = await fetch(url);
                    // when response arrives get data
                    const data = await response.json();
                    
                    console.log(data);
                    
                    setUserData(data);    // set state variable 
               } catch (error) {
                 console.log(error);
                 alert('Error trying to connect with server please reload page');
               }
             };*/

             async function fetchUsers(){
              try {
                   console.log('in async function');
                   const response = await axios.get(url);
                   // when response arrives get data
                   if (response.status===200){
                      const mydata = response.data;
                   
                       console.log(mydata);
                   
                       setUserData(mydata);    // set state variable 
                   }
                   else console.log(response.status);
               } catch (error) {
                 console.log(error);
                 console.log(error.response);
                 alert('Error trying to connect with server please reload page');
              }
            };          

           fetchUsers();  
//        (async function () {
//            console.log('in the async func  ',i++);
//          try {
//            setLoading(true);
//            const res = await axios.get(url);
//            console.log(res.data);
//            setData(res.data);
//          } catch (error) {
//            console.log("Error from fetch", error);
//            setError(error);
//          } finally {
//            setLoading(false);
          },[]);

          

         
        //  console.log(tempUsers);

    //    })();
    //  }, []);   // should only execute on first render as url does not change
    
      return ({ loading, recieved, error,userData });
    }

export default GetUsers;