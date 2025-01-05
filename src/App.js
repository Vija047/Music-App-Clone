import { useState } from 'react';
import './App.css';

import Navbar from './componets/Navbar';
import Home  from './componets/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#90EE90';

    }else{
      setmode('light');
      document.body.style.backgroundColor='white';

    }
  }
  return (

     <Router>
      <Navbar mode={mode} togglemode={togglemode} />
      {/* <Alert alert={alert} /> */}
      <div className="container my-3">
        <h1>Welcome to this website</h1>
        <Routes>
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/" element={<div>Home Page Content</div>} /> */}
        </Routes>
      </div>
    </Router>
    

  );
}

export default App;
