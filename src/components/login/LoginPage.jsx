import React, { useEffect, useState } from "react";
import { login } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import './login.css'
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data,setData]=useState(null);
  
  const navigate=useNavigate()
  async function apical(){
    let a= await login({
      "email": username,
      "password": password
  });
  setData(a)
  if(a && a.token){
    localStorage.setItem('token',JSON.stringify({token:a.token}))
    navigate('/')
    window.location.reload(); 

  }
  }
  return (
<div className="login-form-container">
      <h2>Login</h2>
      <div>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
      </div>
        <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        </div>
        {/* <div>
        <button type="submit">Login</button>
        </div> */}
        <button className="login-btn" onClick={apical}>Login</button>
        <div>
        <Link to={'/register'}>Register</Link>
        </div>
       {(data && data.token) && <>Login successssud</>}
     {(data && data.error) && <p style={{color:"red"}}>{data.error}</p>}
    </div>

    // <div className="login-cont">
    //   <h2>Login Page</h2>
    //   <input
    //     type="text"
    //     placeholder="Username"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //     className="login-inps"
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     className="login-inps"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button className="login-btn" onClick={apical}>Login</button>
    //   <Link to={'/register'}>Register</Link>
    //   {(data && data.token) && <>Login successssud</>}
    //   {(data && data.error) && <p style={{color:"red"}}>{data.error}</p>}
    // </div>
  );
}

export default LoginPage;
