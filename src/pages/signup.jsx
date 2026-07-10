import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function signup(){

    const response=await fetch("http://127.0.0.1:8000/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username,
        email,
        password
      })
    });

    const data=await response.json();

    alert(data.message);

    if(response.ok){
      navigate("/");
    }

  }

  return(
    <div>

      <h1>Signup</h1>

      <input
      placeholder="Username"
      onChange={(e)=>setUsername(e.target.value)}
      />

      <br/><br/>

      <input
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
      />

      <br/><br/>

      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>

      <button onClick={signup}>Signup</button>

      <p>
        Already have an account?
        <Link to="/"> Login</Link>
      </p>

    </div>
  )

}

export default Signup;