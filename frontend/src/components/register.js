import React from 'react';
import Signup from './Signup';
import Signin from './Signin';

const register=()=>{
    return(
        <div style={{display:'flex'}}>
            <Signin/>
            <Signup/>
        </div>
    )
}

export default register;