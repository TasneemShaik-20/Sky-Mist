import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){

    let[city,setCity]=useState("");
    let[error,setError]=useState(false);

    const API_URL= "https://api.openweathermap.org/data/2.5/weather"; //got the url from openweatherapp
    const API_KEY= "550cb7401c6af8dab6d85067738fc77a"; //got key id from signing into the openweather app

    let getWeatherInfo=async()=>{
        try{
             let response= await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    )
       let jsonResponse=await response.json();
       
       let result={  //craeting an object that has the data of particular city that is obtained from searching through API
       city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_Like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,

       }
       console.log(result);
       return result;
        }
        catch (err){
            throw err;
        }
      
    }




    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit =async(evt)=>{
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo=await getWeatherInfo();
        updateInfo(newinfo);
        }
        catch(err){
            setError(true)
        }
        
    }


    return(
        <div className='SearchBox'>
           
            <form onSubmit={handleSubmit} >
                <TextField id="city" 
                label="City Name"
                 variant="outlined"
                  required 
                  value={city}
                  onChange={handleChange}/> 
                 <br></br>
                  <br></br>
                  &nbsp; &nbsp;<Button variant="contained" type='submit' size='small'>
                  Search
                  </Button>
                  <br></br>
                  <br></br>
                {error && <p className='error-text' >No such place exists!</p>}
            </form>
        </div>
    )
}