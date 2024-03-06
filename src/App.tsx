import './App.css'
import Register from './components/Register'
import LogIn from './components/LogIn'
import {useState, useEffect} from 'react';


function App() {
  const [walletIsStorage, setWalletInStorage] = useState(false);

  useEffect(() => {
    console.log("reading from storage");
  },[]);

  return (
    <>
      <h1>Test Wallet</h1>
      {!walletIsStorage && <Register />}
      {walletIsStorage && <LogIn />}
    </>
  )
}

export default App
