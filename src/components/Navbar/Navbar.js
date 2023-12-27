import React from 'react'
import "./Navbar.css"
import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'

import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = (props) => {
  const{user,setUser}=props;
  console.log("your user in navbar",user);
  const navigate = useNavigate();
  async function handleLogout(){
    console.log("handle logout called");
    try {
       const response=await  axios.get('https://survey-rbq3.onrender.com/api/v1/logout')//making get request to do user logout

      if(response.data.success){
        document.cookie = `token=${null}; path=/;`; // removing the token fromm cookie
        setUser({name:undefined,email:undefined,_id:undefined})
        localStorage.removeItem("user");  // removing the user from local storage
        navigate('/');                       // redirecting the user to home page
        toast("Log-out successfully")       // message that user logout
      }
      
    } catch (error) {

      console.log("error in logout",error);
      if(error.response){
        toast(`${error.response.data.message}`);       //handaling the error gracefully
      }else{
        toast(`${error.message}`);
      }
      
    }
  }
  return (
<>
<div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary m-0 p-0">
  <div class="container-fluid bg-info">
    <a class="navbar-brand h4" href="/"><i class="fa-solid fa-earth-americas  ms-2 me-1"></i>SurveySphere</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse "  id="navbarNav">
      <ul class="navbar-nav  h5 ms-auto">
        <li class="nav-item">
        <Link className='nav-link' to={'/'}>Home</Link>
        </li>
        {/* <li class="nav-item">
        <Link className='nav-link' to={'/about'}>About-us</Link>
        </li> */}
        <li class="nav-item">
          {/* <a class="nav-link" href="#">About-us</a> */}
          <Link className='nav-link' to={'/survey'}>Survey Form</Link>
        </li>
        <li class="nav-item">
       {user.name?<Link className='nav-link' to={'/dashboard'}>Dashboard</Link>:null}
        </li>
        <li class="nav-item">
        {user.name? <Chip className='mt-1' variant='outlined' color='secondary' avatar={<Avatar >{user.name.charAt(0).toUpperCase()}</Avatar>} label={user.name} />:<Link className='nav-link' to={'/login'}>Login</Link>}   
        </li>

        <li class="nav-item">
       {user.name?
       <Chip className='mt-1 ms-1' onClick={()=>{handleLogout()}} variant='outlined' color='secondary' label={"log-out"} />
       :null}
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>

    <div  className='outlet' id='outlet'>
    <Outlet>
        
    </Outlet>
    </div>
</>

  )
}

export default Navbar