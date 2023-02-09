import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { textAlign } from '@mui/system';


function Banner(props){

const { textObj } = props;

return(
<div className="titleBlock">
<Box sx={{
    width: '75%',
    height: '10%',
    backgroundColor: 'primary.main',
    mx:'auto',
    borderRadius:'10px',
    marginTop:'15px',
    textAlign:'center'
 }}
>    
 <Typography className="mainHeader" variant="h3" sx={{color:'white',padding:'10px'}}>{textObj.title}</Typography>

 <Typography className="subHeader" variant="h5" sx={{color:'black',padding:'10px',marginTop:'15px',marginBottom:'10px'}}>{textObj.strapline}</Typography>        
</Box>
</div>
);

};

export default Banner;