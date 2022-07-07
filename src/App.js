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
    <div>
      <Navbar title="TextUtils"   mode = {mode} toggleMode = {toggleMode}/>
      <strong><Alert alert= {alert}/></strong>
      <div className='container my-3'>
        <TextForm heading="Enter your text to analyze " mode ={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
  