import logo from './logo.svg';
import './App.css';
import React from 'react'

const { useEffect, useState } = React
const CounterWithNameAndSideEffect = () => {
 const [count, setCount] = useState(0)
 useEffect(() => {
 console.log(`Component Method`)
 },[])
 return (
 <div>
 <p>You clicked {count} times</p>
 <button onClick={() => setCount(count + 1)}>Click me</button>
 </div>
 )
}
function WelcomeMessage({ myprop }) {
  return <p>{myprop}</p>
 }
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <CounterWithNameAndSideEffect/>
        </p>
        <WelcomeMessage myprop={'This is peepeepoopoo '} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
