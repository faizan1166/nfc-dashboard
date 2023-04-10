import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Login from "./components/Login";

import Dashboard from "./components/Dashboard";
import SchoolList from "./components/SchoolList";
import AssignSchool from "./components/AssignSchool";
import ChangePassword from "./components/ChangePassword";


function App() {
  // if token!== undefined{
  // let token = JSON.parse(localStorage.getItem("token"));
  return (

      <Routes>
        {/* <Route path="/"  element={ Boolean(localStorage.getItem("token")) ? (
                <Dashboard />
              ) : (
                <Login />
              )
            } /> */}
             <Route path="/"  element={ Boolean(localStorage.getItem("token")) ? (
                <SchoolList />
              ) : (
                <Login />
              )
            } />
            <Route path="/assignSchool"  element={ Boolean(localStorage.getItem("token")) ? (
                <AssignSchool />
              ) : (
                <Login />
              )
            } />
            <Route path="/changepassword"  element={ Boolean(localStorage.getItem("token")) ? (
                <ChangePassword />
              ) : (
                <Login />
              )
            } />
         
        
      </Routes>
 
  );
}

export default App;
