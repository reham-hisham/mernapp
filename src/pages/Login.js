
import '../App.css';
import React, { useState } from 'react';
import axios from 'axios';
function App() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    function login(event){
  
        axios.post('http://localhost:4000/user/login',
         {
                email , password
            }
        ).then((result) => {
          if(result){
            localStorage.setItem('token', result.data)
            console.log("finidh")
            window.location.href= '/info'
          }
        }).catch((err) => {
            console.log(err)
        });
    }
  return (
    <div>
        <h1>login</h1>
    <form >
 <input
 type="email"
 value={email}
 onChange={(e)=>setEmail(e.target.value)}
 
 /><br/>
 <input
 type="password"
 value={password}
 onChange={(e)=>setPassword(e.target.value)}
 
 />
 <button type='Submit' onClick={login}>Login</button>
    </form >
    </div>
  );
}

export default App;
