import React from 'react';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';

const register=()=>{
    return(
        <div style={{display:'flex'}}>
            <Signin/>
            <Signup/>
        </div>
    )
}

export default register;