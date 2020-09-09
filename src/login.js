import React from "react"



function Login(){
  return(
    <div className="login">
      <div >
        <label>Email</label><br></br>
        <input type="text" id='email' placeholder='email' required></input>
      </div>
      <div>
        <label>password</label><br></br>
        <input type="password" id='password' placeholder='password' required></input>
      </div>

      <div className="button">
      <button id="login">Login</button>
      <button id="signup">Signup</button>
      </div>
   
    </div>
  )
}
export default Login;