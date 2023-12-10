import React, { useState } from "react";
import { register } from "../../api/register";
import { useNavigate } from "react-router-dom";
import './register.css'

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err,setErr]=useState(null);

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, such as sending the data to a server.
    // For simplicity, let's just log the data to the console.
    let a= await register({
        "firstname":firstName,
        "lastname":lastName,
        "email": email,
        "password": password
    })
    if(a && a.message==="Successfully"){
      setErr(null)
        navigate(`/verification?data=${encodeURIComponent(email)}`)
      }
        setErr(a)
    // Clear the form fields after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div  className="register-cont">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="register-inps">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div  className="register-inps">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="register-inps">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="register-inps">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
       <div>
       <button onClick={(e)=>{e.stopPropagation()}} className="register-btn" type="submit">Register</button>
       </div>
       <button
          className=""
          onClick={(e) => {
            navigate("/");
          }}
          type="submit"
        >
          Login səhifəsinə qayıt
        </button>
      {(err!==null) && <p style={{color:"red"}}>{err.error}</p>}
      </form>
    </div>
  );
};

export default Register;
