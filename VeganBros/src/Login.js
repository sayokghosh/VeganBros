import React from 'react'
import './App.css';


function Login() {
  return (
    
    


    <div class="containerr">
        <form id="registrationForm" class="animate_animated animate_fadeInDown">
            <h1 id="reg">Registration</h1>
            <label for="name" id="leb">Name:</label>
            <input type="text" id="name" className="regi" placeholder="Enter your name" required/>

            <label for="email" id="leb">Email:</label>
            <input type="email" id="email" className="regi" placeholder="Enter your email" required/>

            <label for="password" id="leb">Password:</label>
            <input type="password" id="password" className="regi" placeholder="Enter your password" required/>

            <button type="submit" class="animate_animated animate_fadeInUp" className='bton'>Register</button>
        </form>
    </div>


    

    
  )
}

export default Login