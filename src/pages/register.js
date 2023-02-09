import React from 'react';
import {useState} from 'react';
//import ReactDOM from 'react-dom';
//import { useFormik } from 'formik';
//import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
//import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Banner from '../components/Banner/Banner';


// reccomended approach to form in mui by formik.... does not work
// but I am finding issues with obsolete library references etc in internet documentation. 

/*
function Registration(){
console.log('entered the form');

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
console.log('at return in form');
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};*/


function Registration(){

// useState vars for future use following full page routing

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [age, setAge] = useState('');
const [location, setLocation] = useState('');
const [gender, setGender] = useState('');
const [interests, setInterests] = useState('');
const [wants,setWants] = useState('');

// submit handler displays entered values but would forward to server in reality

function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, location,age, email, interests,wants)
        alert(`The following will be passed for registration:-${firstName},${lastName},${location},${age},${gender},${email},${interests},${wants}`); 
}


// return renders form with all inputs and selects it calls Banner for main title. This form was created following formik-mui issues as with routing too. 

return(

        <Box className='registrationForm' sx={{width:'100%',marginTop: '20px',mx:'auto'}}>
          <Banner textObj={{title:'Looking For Me?',strapline:'Complete Registration Below To Message New Hang-outs'}} /> 
          <Box sx={{ width:'75%',mx:'auto'}} >        
          <form onSubmit={handleSubmit} sx={{width:'100%',marginTop:'30px'}}>
              <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Location"
                        onChange={e => setLocation(e.target.value)}
                        value={location}
                        fullWidth
                        required
                    />
                    <TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label="Age"
                        onChange={e => setAge(e.target.value)}
                        value={age}
                        fullWidth
                        required
                    />
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                  <FormControl fullWidth >
                   <InputLabel id="selectLabel">Gender</InputLabel>  
                   <Select
                    labelId="genderSelect"
                    id="genderInput"
                    value={gender}
                    label="Gender"
                    onChange={e => setGender(e.target.value)}
                    fullWidth
                    required
                   >
                   <MenuItem value={'male'}>male</MenuItem>
                   <MenuItem value={'female'}>female</MenuItem>
    
                  </Select> 
                 </FormControl>

                    <TextField
                      type="email"
                      variant='outlined'
                      color='secondary'
                      label="Email"
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      fullWidth
                      required
                      sx={{mb: 4}}
                    />

                </Stack>
 
 

                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Interests"
                    onChange={e => setInterests(e.target.value)}
                    value={interests}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Wants"
                    onChange={e => setWants(e.target.value)}
                    value={wants}
                    fullWidth
                    required
                    sx={{mb: 4}}
                    />
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
           </Box>
     
        </Box>
    )

 



};

export default Registration;