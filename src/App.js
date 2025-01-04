import { useState } from 'react';
import './App.css';

import Navbar from './componets/Navbar';

// import Header from './componets/Header'; // Correct case and path
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
    <>
      <div>
        
       <Navbar mode={mode} togglemode={togglemode}/>
<header/>

      </div>
    </>
  );
}

export default App;
