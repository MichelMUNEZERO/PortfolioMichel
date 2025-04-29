import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Protfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
