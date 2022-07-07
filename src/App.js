import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
function App() {
  const toggleMode = () => {
    if(mode ==='light'){
      setkMode ('dark')
      document.body.style.backgroundColor = '#2C3639';
    }     
    else{
      setkMode ('light')
      document.body.style.backgroundColor = 'white';
    }
      
  }
  const [mode,setkMode] = useState('light'); //whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    
  }
  return (
    <div>
      <Navbar title="TextUtils"   mode = {mode} toggleMode = {toggleMode}/>
      <strong><Alert alert= "this is alert"/></strong>
      <div className='container my-3'>
        <TextForm heading="Enter your text to analyze " mode ={mode}/>
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
  