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

  useEffect(() => {                             //Add the data in survey when user get login 
    async function fetchedData() {
      try {
        const axiosInstance = axios.create({
          withCredentials: true,
        });
        const response = await axiosInstance.get(        //sending request to server to get the survey data if your will login then server will give the data
          "http://localhost:4000/api/v1//survey"
        );
        console.log("surveys", response.data.surveys);
        SetSurvey([...response.data.surveys]);
      } catch (error) {}
    }

    fetchedData();
  }, [user]);

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
