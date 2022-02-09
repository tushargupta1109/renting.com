import React from 'react';
import Signup from './Signup';
import Signin from './Signin';

const register=({setPersonid})=>{
    return(
        <div style={{display:'flex'}}>
            <Signin setPersonid={setPersonid}/>
            <Signup/>
        </div>
    )
}

export default register;