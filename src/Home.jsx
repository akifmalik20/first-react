import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import "../src/Home.css";
import NavScrollExample from "./Navbar";
import Nav2 from "./Nav";
import Text from "./Text";
const Home = () => {

  return (
    <>
    <section>
    <NavScrollExample/>
 <Nav2/> 
<div className="background-image-container">

 <Text/>
</div>
</section>


</>
);


}

export default Home