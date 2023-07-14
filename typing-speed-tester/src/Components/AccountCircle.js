

import React, {useState} from 'react' ;
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import Modal from '@mui/material/Modal';
import { AppBar } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export const AccountCircle = () => {

    const [open, setOpen] = useState(false);
    const [value,setValue] = useState(0) ;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleValueChange = (e,v) => setValue(v) ;

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
    </div>

</Modal>

    </div>
  )
}
