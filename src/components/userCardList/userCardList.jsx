/*import { Component } from "react";*/
import UserCard from "../userCard/userCard";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';



function UserCardList(props){

    const { usersInfo } = props;
    console.log('in the card list function',usersInfo
    );


    //   handler commented out until a new solution found that fits my use requirements

  /*  
   const handleChange = (
     event: React.MouseEvent<HTMLElement>,
     newAlignment: string,
    ) => {
     setAlignment(newAlignment);
   };
  */
    
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
       //value={alignment}
       exclusive
       //onChange={handleChange}
       aria-label="Platform"
     >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="male">Male</ToggleButton>
      <ToggleButton value="female">Female</ToggleButton>
    </ToggleButtonGroup>


    <ToggleButtonGroup className="ageGroup"
       color="primary"
       //value={alignment}
       exclusive
       //onChange={handleChange}
       aria-label="Platform"
     >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="30"> under 30yrs</ToggleButton>
      <ToggleButton value="50">under 55yrs</ToggleButton>
    </ToggleButtonGroup>    





    </Stack>

         <Stack
           direction={{ xs: 'column', sm: 'column', md:'row' }}
           spacing={{ xs: 1, sm: 1, md: 1 }}
           justifyContent="flex-start"
           marginTop='15px' sx={{ flexWrap: 'wrap', gap: 1 }}>

          {usersInfo.map((user) => {
            return <UserCard userData={user} />;
          })}

        </Stack>
      </div>
    );
}

export default UserCardList;