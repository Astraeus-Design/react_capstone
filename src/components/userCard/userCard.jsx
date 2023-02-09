/*import { Component } from "react";*/

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import { lightGreen } from '@mui/material/colors';

function UserCard(props){
  
    const { gender,name,location,dob,picture,userExtras}=props.userData;
    console.log('in the user card creation function');
    let keyValue=0;
    
    return (

        // create a card using mui

            <Card className="userCard-Container" key={keyValue++} sx={{ width:300 }}>
              <CardContent>
                <CardHeader gutterBottom variant="h6" component="div" title={name.first+' '+name.last} sx={{textAlign:'center'}}/>
                  
                
              
                <CardMedia
                 component="img"
                 alt="users img"
                 height="155"
                 image={picture.large}
                />
             
                <Typography gutterBottom variant="h7" component="div" sx={{textAlign:'center'}}>
                  {gender}
                </Typography>
                <Typography gutterBottom variant="h7" component="div" sx={{textAlign:'center'}}>
                  location: {location.country}
                </Typography>
                <Typography gutterBottom variant="h7" component="div" sx={{textAlign:'center'}}>
                  age: {dob.age}
                </Typography>  
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize:12}}>
                  {name.first}s Interests:</Typography>                                                
                <Typography paragraph variant="body2" color="text.secondary" component='div' sx={{fontSize:12,marginTop:0.75,maxWidth:'90%',display:'inline-block',wordBreak:'break-word'}}>
                 {userExtras.userInterests}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize:12,marginTop:0.75}}>
                  {name.first}s Looking for: 
                </Typography> 
                <Typography paragraph variant="body2" color="text.secondary" component='div' sx={{fontSize:12,maxWidth:'90%',display:'inline-block',wordBreak:'break-word'}}>
                 {userExtras.userWants}
                </Typography>                 
              
              
               <CardActions>
                
                <Button size="large" onClick={()=>{alert(`Messaging ${name.first}`)}} sx={{marginX:'auto'}}>Message {name.first} </Button>
               </CardActions>
              </CardContent>
            </Card>
          );
 }

export default UserCard;
