import './App.css'
import React from 'react';
import Navbar from "./components/Navbar"
//import TextForm from "./components/TextForm"
import About from './components/About';

function App() {
  return (
    <div>
  {/*  <Navbar  title="TextUtils" AboutText="About TextUtils"/>*/} 
    {/* <Navbar/> */}
    <Navbar title="TextUtils" />
    <div className="container my-3">
    {/*<TextForm heading="Enter The text to analyze below"/>*/}
    <About/>
    </div>
    </div>
    
  );
}

export default App;
