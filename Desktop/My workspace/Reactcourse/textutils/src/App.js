import './App.css'
import React from 'react';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

function App() {
  return (
    <div>
  {/*  <Navbar  title="TextUtils" AboutText="About TextUtils"/>*/} 
    {/* <Navbar/> */}
    <Navbar title="TextUtils" />
    <div className="container">
    <TextForm heading="Enter The text to analyze below"/>
    </div>
    </div>
    
  );
}

export default App;
