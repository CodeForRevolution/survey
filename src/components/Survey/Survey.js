import React, { useState } from "react";
import "./Survey.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

const Survey = (props) => {

  const{SetSurvey,survey}=props
  console.log("your  in sevary",props)
    const [formData,setFormData]=useState({gender:"male"})


function handleChange(e){
    var name=e.target.name;
    var value=e.target.value;
    console.log("your change is",)
    setFormData({...formData,[name]:value});
    console.log("your formData",formData);
   
    
}


 async function handleSubmit(e){
    e.preventDefault();
    console.log("submit is called");

    try {
      
      const response=await axios.post("http://localhost:4000/api/v1//survey/new",{...formData});
      console.log("your reponse after making survey",response.data);
      SetSurvey([...survey,{...response.data.survey}])
      setFormData({name:'',email:'',nationality:'',message:'',address:'',phone:'',})
      toast("Successfully submited")
    } catch (error) {
      console.log("your error in creatine survey",error)
      toast(error.message);
    }
    console.log("your form data is ready to submit",formData)

}

  return (
    <div id="survey">
      <div className="container">
        <form action="" className=""  onSubmit={(e)=>handleSubmit(e)}>
            <h3 className="">Thank Helping Us</h3>
          <div className="row bg-light">
            <div className="col-12 my-2">
                <h4 className="m-0">Details</h4>
            </div>
            <div className="col-12 my-2">
             <div className="row">
                <div className="col-6">
                <Box fontWeight={700}>
                <TextField
                  id="outlined-basic"
                  fullWidth={true}
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  sx={{fontSize:'30px'}}
                 onChange={(e)=>handleChange(e)}
                  required
                />
              </Box>
                </div>
                <div className="col-6">
                <Box fontWeight={700}>
                <TextField
                     id="outlined-basic"
                     fullWidth={true}
                     label="@gmail.com"
                     variant="outlined"
                     name="email"
                     value={formData.email}
                     sx={{fontSize:'30px'}}
                    onChange={(e)=>handleChange(e)}
                    required
                  
                />
              </Box>
                </div>
             </div>
            </div>
            <div className="col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <Box >
                    <TextField
                         id="outlined-basic"
                         fullWidth={true}
                         label="phone"
                         variant="outlined"
                         name="phone"
                         type="number"
                         value={formData.phone}
                         sx={{fontSize:'30px'}}
                        onChange={(e)=>handleChange(e)}
                        required
                    />
                  </Box>
                </div>
                <div className="col-6">
                  <Box>
                    <TextField
                          id="outlined-basic"
                          fullWidth={true}
                          label="Nationality"
                          variant="outlined"
                          name="nationality"
                          value={formData.nationality}
                          sx={{fontSize:'30px'}}
                         onChange={(e)=>handleChange(e)}
                         required
                    />
                  </Box>
                </div>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="row">
                <div className="col-12">
                <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gender"
        defaultValue="male"
        onChange={(e)=>{handleChange(e)}}
      >
        <FormControlLabel value="female"  control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
       
      </RadioGroup>
    </FormControl>
                </div>
                
              </div>
            </div>
            <div className="col-12 my-2">
              <Box>
                <TextField
                      id="outlined-basic"
                      fullWidth={true}
                      label="Address"
                      variant="outlined"
                      name="address"
                      value={formData.address}
                      sx={{fontSize:'30px'}}
                     onChange={(e)=>handleChange(e)}
                     required
                />
              </Box>
            </div>
            <div className="col-12 my-2">
              <Box>
                <TextField
                     id="outlined-basic"
                     fullWidth={true}
                     label="Message"
                     variant="outlined"
                     name="message"
                     value={formData.message}
                     sx={{fontSize:'30px'}}
                    onChange={(e)=>handleChange(e)}
                    required
                />
              </Box>
            </div>

            <div className="col-12 my-2">
        
        <Button  type="submit"  fullWidth={true} variant="contained">Submit</Button>

  </div>
          </div>

        

         
        </form>
      </div>
    </div>
  );
};

export default Survey;
