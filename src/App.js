import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import About from "./page/About";
import Project from "./page/Project";
import Contact from "./page/Contact";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  // let location = useLocation();
  // console.log(location);

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
