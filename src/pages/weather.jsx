import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Weather(){

    const navigate=useNavigate();

    const [city,setCity]=useState("");
    const [weather,setWeather]=useState(null);

    async function getWeather(){

        const token=localStorage.getItem("token");

        const response=await fetch(
            `http://127.0.0.1:8000/weather/${city}`,
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        );

        const data=await response.json();

        setWeather(data);

    }

    function logout(){

        localStorage.removeItem("token");

        navigate("/");

    }

    return(

        <div>

            <h1>Weather App</h1>

            <button onClick={logout}>Logout</button>

            <br/><br/>

            <input
            placeholder="City"
            onChange={(e)=>setCity(e.target.value)}
            />

            <button onClick={getWeather}>Search</button>

            {weather && weather.city && (

                <div>

                    <h2>{weather.city}</h2>

                    <p>Temperature : {weather.temperature} °C</p>

                    <p>Humidity : {weather.humidity}%</p>

                    <p>Wind : {weather.wind_speed} km/h</p>

                </div>

            )}

        </div>

    )

}

export default Weather;