import React from "react";
import Buy from "./Buy";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";


function Index() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div
        data-bs-spy="scroll"
        data-bs-offset="0"
        className="scrollspy-example pt-5 "
        tabIndex="0">
        <div id="home" >
          <Home />
        </div>
        <div id="buy" className="pt-5">
          <Buy />
        </div>
        <div id="contact" className="pt-5">
          <Contact />
        </div>
        <div id="footer" className="pt-5 mt-5">
          <Footer />
        </div>
        
      </div>
    </div>
  );
}

export default Index