import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

import { RouterProvider } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import Survey from "./components/Survey/Survey";
import Form from "./components/Auth/Form";

function App() {
  const [user, setUser] = useState({});
  const [survey, SetSurvey] = useState([]);

  useEffect(() => {   
    
    //Add the data in survey when user get login 


    async function fetchedData() {
     
      try {    

        if(!user.name){
        const localUser=JSON.parse(localStorage.getItem("user"));
          if(localUser){
            setUser({...localUser});
          }

        }
        const axiosInstance = axios.create({
          withCredentials: true,
        });
        console.log("you are fetching the survey")
        const response = await axiosInstance.get("https://survey-rbq3.onrender.com/api/v1/survey");
        console.log("your response of survey",response);
        console.log("surveys", response.data.surveys);
        SetSurvey([...response.data.surveys]);
      } catch (error) {
        console.log("your error is",error);
      }
    }

    fetchedData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar user={user} setUser={setUser} />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "survey",
          element: <Survey SetSurvey={SetSurvey} survey={survey} />,
        },
        { path: "dashboard", element: <Dashboard surveys={survey} /> },
        { path: "login", element: <Form user={user} setUser={setUser} /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
