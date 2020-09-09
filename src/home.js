import React from "react";
import {
  BrowserRouter as Router,
  
  Route,
  Link
} from "react-router-dom";
import Login from "./login";
import Signup from "./signup";



function Home(){
  return(



    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Signup">Signup</Link>
        </li>
      </ul>

    
      
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Signup">
            <Signup/>
          </Route>
       
      </div>
    </Router>
    
  )
}
export default Home;