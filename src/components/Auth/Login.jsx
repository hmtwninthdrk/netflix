import React from 'react'
import App from '../../App';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Intro from '../Intro';

const Login = () => {
    
  const [name,setName] = useState("")
  const [passw,setPassw] = useState("")
  const [home,setHome] = useState(true);
  
 

  function logIn(e){
    const users = JSON.parse(localStorage.getItem("users"))
    
    e.preventDefault()


    for(let a of users){
      if(a.name === name && a.passw ===passw){
          
        setHome(!home)
      }
    }
    
      
  }
  
  return (
    <>
     {home?( <section className="logsection">
     <div className="log_block">
       <div className="log_title">Sign in</div>
       <form onSubmit={logIn} className="log_inner">
       <input onChange={(event)=>setName(event.target.value)} type="text" placeholder="Username" className="log-inp"/>
       <input onChange={(event)=>setPassw(event.target.value)} type="password" placeholder="Password" className="log-inp"/>
       <button className="inp_btn">Log In</button>
       <div className="auth_text">Dont have an account? <Link className='auth_link' to='/log'>Register</Link></div>

      

       </form>
     </div>
   </section>):(
      <Intro/>)}
     
   </>
    
  )
}

export default Login