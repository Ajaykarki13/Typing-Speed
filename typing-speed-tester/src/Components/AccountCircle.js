

import React, {useState} from 'react' ;
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import Modal from '@mui/material/Modal';
import { AppBar } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth' ;
import { auth } from '../firebaseConfig';


export const AccountCircle = () => {

    const [open, setOpen] = useState(false);
    const [value,setValue] = useState(0) ;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleValueChange = (e,v) => setValue(v) ;

  const googleProvider = new GoogleAuthProvider();

    const handleGoogle = () => {
      signInWithPopup(auth,googleProvider).then((res)=>{
        toast.success('🦄 Login successful', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }).catch((err)=>
      {
      toast.error('Login Failed', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      }
      )
    }

  return (
    <div>
<AccountCircleTwoToneIcon onClick={handleOpen} />

<Modal open={open}   onClose={handleClose}
 style= {{display:'flex',justifyContent:'center',alignItems:'center'}}>

  <div style={{width:'400'}}>

    <AppBar position='static' style={{background:'transparent'}}>
<Tabs  value={value} variant='fullWidth' onChange={handleValueChange}>
    <Tab label='login' style={{color:'pink'}}></Tab>
    <Tab label='signup' style={{color:'pink'}}></Tab>
</Tabs>
    </AppBar>
    {value === 0 && <LoginForm/>}
    {value === 1 && <SignupForm/>}
    <GoogleButton  style={{width:'100%'}}
    onClick={handleGoogle} /> 

    </div>
  
</Modal>

    </div>
  )
}
