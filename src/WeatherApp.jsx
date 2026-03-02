import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css"

export default function WeatherApp(){
//the state variable wratherinfo is used becoz it changes when new inpit is given
    const [weatherInfo,setWeatherInfo]=useState({
        
//the default info the website should have

        city:"Delhi",
          feelslike:24.84,
          temp:25.05,
          tempMin:25.05,
          tempMax:25.05,
          humidity:47,
          weather:"haze",
    })

    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo)
    }


    return (
        <div  className="heading" style={{textAlign:"center"}}>
            <h2 className="heading">Sky Mist</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}