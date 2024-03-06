import './App.css'
import Register from './components/Register'
import LogIn from './components/LogIn'
import {useState, useEffect, createContext} from 'react';

export const WalletContext = createContext({});

function App() {
    const [walletIsStorage, setWalletInStorage] = useState(false);
    const [walletData, setWalletData] = useState({});

    useEffect(() => {
        console.log("reading from storage");
    },[]);

    return (
        <>
            <WalletContext.Provider value={walletData}>
                <h1>Test Wallet</h1>
                {!walletIsStorage && <Register />}
                {walletIsStorage && <LogIn />}
            </WalletContext.Provider>
        </>
    )
}

export default App
