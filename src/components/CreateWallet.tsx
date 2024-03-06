import styled from "styled-components"
import { useState, useEffect } from "react"
import { createNewWallet } from "../utils/walletHelpers";

export default function CreateWallet(){
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    useEffect(() => {
        if(password1.length !== 0 && password2.length !== 0 && password1 === password2){
            setPasswordIsValid(true);
        }
    }, [password1, password2]);
    
    // function handleCreate() {
    //     createNewWallet();
    // }
    

    function createWallet(){
        console.log("wallet created");
        console.log("wallet info encrypted in storage");
        console.log("logged in app");
    }

    return (
        <Wrapper>
            <label>Enter password:</label>
            <input 
                type="text" 
                value={password1} 
                onChange={(event) => {
                    setPassword1(event.target.value);
                }
            }></input>
            <label>Enter password again:</label>
            <input 
                type="text" 
                value={password2}
                onChange={(event) => {
                    setPassword2(event.target.value);
                }
            }
                ></input>
            <button disabled={!passwordIsValid} onClick={(event)=>{
                event.preventDefault();
                createWallet();
            }}>submit</button>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    display: flex;
    flex-direction: column
`