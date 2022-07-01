import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <div>
      <Navbar title="TextUtils"  />
      <div className='container my-3'>
        <TextForm heading="Enter your text to analyze "/>
      </div>
    </div>
  );
}

export default App;
