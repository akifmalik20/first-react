import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Home1 from "./Home1"
import { Route, Router, Routes } from "react-router-dom";


const App=()=>{

  return(
<>
    {/* <NavScrollExample/> */}
    
    <Home/>
    <Home1/>
    
    </>
  );

}

export default App