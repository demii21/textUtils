import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const toggleMode = () => {
    if(mode ==='light'){
      setkMode ('dark')
      document.body.style.backgroundColor = '#2C3639';
      showAlert("Dark Mode has been enabled ","success ");
    }     
    else{
      setkMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled ","success ");
      
    }
      
  }
  const [mode,setkMode] = useState('light'); //whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils"   mode = {mode} toggleMode = {toggleMode}/>
      <strong><Alert alert= {alert}/></strong>
      
        <div className='container my-3'>
          <Routes>
              <Route exact path="/" element={<TextForm heading="Enter your text to analyze " mode ={mode} showAlert={showAlert}/>} />
              <Route exact path="/About" element={<About/>}/>            
          </Routes>
        </div>    
    </Router>
    </>
  );
}

export default App;
  