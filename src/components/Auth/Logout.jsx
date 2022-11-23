import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Logout = () => {

    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [passw,setPassw] = useState("")
    const[log,setLog] = useState(false);
 
    function signIn(e) {          
          e.preventDefault()

         let users = JSON.parse(localStorage.getItem("users") || "[]");
          let user = {
            email:email,
            name:name,
            passw:passw
          }
          
          users.push(user)
          localStorage.setItem('users',JSON.stringify(users))
          
              
    }
    return (
    <section className="logsection">
     
      <div className="log_block">
        
        <div className="log_title">Register</div>
        <form onSubmit={signIn} className="log_inner">
          <input
            type="email"
            placeholder="Email Address"
            className="log-inp"
            onChange={(event)=>setEmail(event.target.value)}
          />
          
          <input
            type="text"
            placeholder="Username"
            className="log-inp "
            onChange={(event)=>setName(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="log-inp "
            onChange={(event)=>setPassw(event.target.value)}
          />
          <button className="inp_btn">
            Register
          </button>
          <div className="auth_text">Already have acc? <Link className='auth_link' to='/login'>Login</Link></div>   

        </form>
        
      </div>
      
    </section>
  )
}

export default Logout