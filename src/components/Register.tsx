import CreateWallet from "./CreateWallet"
import RestoreWallet from "./RestoreWallet"
import styled from "styled-components"
import { useState } from 'react'

enum ViewOptions {
    Unselected,
    Create,
    Register
}

export default function Register(){
    const [viewOption, setViewOption] = useState(ViewOptions.Unselected);

    return (
        <Wrapper>
            {viewOption === ViewOptions.Unselected && (
                <>
                    <button onClick={() => setViewOption(ViewOptions.Create)}>Create new wallet</button>
                    <p>or</p>
                    <button onClick={() => setViewOption(ViewOptions.Register)}>Restore existing wallet</button>
                </>
            )}
            {viewOption === ViewOptions.Create && <CreateWallet />}
            {viewOption === ViewOptions.Register && <RestoreWallet />}

        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column
`