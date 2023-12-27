import React, { useState } from "react";

import "./form.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Form = (props) => {
  const {user,setUser}=props;
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({});
 
 const navigate = useNavigate();
  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (isLogin) {
     try {


      const response = await axios.post("http://localhost:4000/api/v1//login",{...formData,});
      
      const token = response.data.token;
      document.cookie = `token=${token}; path=/;`;
    setFormData({...formData,email:"",password:''});
    setUser({...response.data.user});
    toast("Login successfully")
    navigate('/dashboard');
 
      
     } catch (error) {

      if(error.response){
        toast(`${error.response.data.message}`);
      }else{
        toast(`${error.message}`);
      }
      
      
      
     }
    } else {
      try {
        



        console.log("your form data before register",formData);
         const response=await axios.post("http://localhost:4000/api/v1//register",{
          ...formData
         })

         const token = response.data.token;
         document.cookie = `token=${token}; path=/;`;
        setUser({...response.data.user});
        toast("created successfully")
        navigate('/dashboard');
       
      } catch (error) {
        if(error.response){
          toast(`${error.response.data.message}`);
        }else{
          toast(`${error.message}`);
        }
      }




    }
  };

  return (
    <>
      <div id="auth">
        <div className="container" id="form">
          <div className="row">
            {isLogin ? (
              <Login
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formData={formData}
              />
            ) : (
              <SignUp
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formData={formData}
              />
            )}
          </div>
          <div className="row mt-5 text-center">
            <div className="col-12">
              <button
                className="btn btn-success w-100 my-1"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "SIGN_UP" : "LOG-IN"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Login = (props) => {
  const { handleSubmit, handleChange, formData } = props;


  return (
    <>
      <div className="col-12 " id="login">
        <div className="row">
          <div className="col-12 text-center ">
            <i
              class="fa-solid fa-lock  p-3 py-2 rounded-circle  "
              style={{
                background: "#0dcaf0",
                color: "black",
                fontSize: "20px",
              }}
            ></i>
          </div>
          <div className="col-12 text-center h4">LOG-IN</div>
        </div>
      </div>
      <div className="col-12 my-2">
        <Box fontWeight={700}>
          <TextField
            id="outlined-basic"
            fullWidth={true}
            label="Email"
            variant="outlined"
            name="email"
            size="small"
            onChange={(e) => handleChange(e)}
            required
            value={formData.email}
            color="secondary"
          />
        </Box>
      </div>
      <div className="col-12 my-2">
        <Box fontWeight={700}>
          <TextField
            id="outlined-basic"
            fullWidth={true}
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            sx={{ fontSize: "30px" }}
            onChange={(e) => handleChange(e)}
            required
            value={formData.password}
            size="small"
          />
        </Box>
      </div>
      <div className="col-12 my-2 ">
        <div class="form-check ms-auto me-auto ">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Remember Me
          </label>
        </div>
      </div>
      <div className="col-12 text-center mt-5">
        <button
          className="btn btn-success"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          LOG-IN
        </button>
      </div>
    </>
  );
};

const SignUp = (props) => {
  const { handleSubmit, handleChange, formData } = props;

  

  return (
    <>
      <div className="col-12" id="signUp">
        <div className="row">
          <div className="col-12 text-center ">
            <i class="fa-regular fa-user h4 bg-info p-3 py-2 rounded-circle"></i>
          </div>
          <div className="col-12 text-center h4">SIGN-UP</div>
        </div>
      </div>
      <div className="col-12 my-2">
        <Box fontWeight={700}>
          <TextField
            size="small"
            id="outlined-basic"
            fullWidth={true}
            label="Name"
            variant="outlined"
            name="name"
            type="text"
            sx={{ fontSize: "30px" }}
            onChange={(e) => handleChange(e)}
            required
            value={formData.name}
          />
        </Box>
      </div>
      <div className="col-12 my-2">
        <Box fontWeight={700}>
          <TextField
            size="small"
            id="outlined-basic"
            fullWidth={true}
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            sx={{ fontSize: "30px" }}
            onChange={(e) => handleChange(e)}
            required
            value={formData.email}
          />
        </Box>
      </div>
      <div className="col-12 my-2 ">
        <Box fontWeight={700}>
          <TextField
            size="small"
            id="outlined-basic"
            fullWidth={true}
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            sx={{ fontSize: "30px" }}
            onChange={(e) => handleChange(e)}
            required
            value={formData.password}
          />
        </Box>
      </div>
      <div className="col-12 my-2 ">
        
        <Box fontWeight={700}>
          <TextField
            size="small"
            id="outlined-basic"
            fullWidth={true}
            label="confirm-Password"
            variant="outlined"
            name="confirmPassword"
            type="password"
            sx={{ fontSize: "30px" }}
            onChange={(e) => handleChange(e)}
            required
            value={formData.confirmPassword}
          />
        </Box>
      </div>
      <div className="col-12 text-center ">
        <button className="btn btn-success" type="submit" onClick={(e) => handleSubmit(e)}>
          Create_ACCOUNT
        </button>
      </div>
    </>
  );
};

export default Form;

console.log()