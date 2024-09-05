import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import "../src/Home.css";

import Sec from "./Sec";

import Sec2 from "./Sec2";
import Sec1 from "./Sec1";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
import Sec5 from "./Sec5";
import Sec6 from "./Sec6";
const Home = () => {

  return (
    <>

      <section>
        <Sec />
     <Sec1/>
        <Sec2 />
        <Sec3/>
        <Sec4/>
        <Sec5        />
      <Sec6/>
      </section>

    </>
  );


}

export default Home