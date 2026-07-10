import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function Login(){

    const navigate=useNavigate();

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    async function login(){

        const response=await fetch("http://127.0.0.1:8000/login",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                username,
                password
            })

        });

        const data=await response.json();

        if(response.ok){

            localStorage.setItem("token",data.access_token);

            navigate("/weather");

        }

        else{

            alert(data.detail);

        }

    }

    return(

        <div>

            <h1>Login</h1>

            <input
            placeholder="Username"
            onChange={(e)=>setUsername(e.target.value)}
            />

            <br/><br/>

            <input
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            />

            <br/><br/>

            <button onClick={login}>Login</button>

            <p>
                Don't have an account?
                <Link to="/signup"> Signup</Link>
            </p>

        </div>

    )

}

export default Login;