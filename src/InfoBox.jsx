import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropSharpIcon from '@mui/icons-material/WaterDropSharp';
import AirSharpIcon from '@mui/icons-material/AirSharp';
import "./InfoBox.css"

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const  HOT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOU2zkAySI9PzoseiZBNsvK6lo502q7btUsg&s";
  const  COLD_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9Z-NuFxTGct8K1QJ_vN1zgwjGrCiDNPhdQ&s";  
  const RAIN_URL="https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?semt=ais_hybrid&w=740&q=80"

    return(
        <div className="InfoBox">
            {/* <h3>Weather Info-{info.weather}</h3> */}
            <div className='cardContainer'>
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>75? RAIN_URL:info.humidity<50?HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}&nbsp;{
            info.humidity>75?<ThunderstormIcon style={{color:"darkblue"}}/>:info.humidity<50?<SunnyIcon style={{color:"orange"}}/>:<AcUnitIcon style={{color:"lightblue"}}/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
           
            <b> <p>  <ThermostatIcon style={{color:"red"}}/> Temperature={info.temp}&deg;C</p></b>
           <b><p> <WaterDropSharpIcon  style={{color:"blue"}}/>Humidity={info.humidity}&deg;C</p></b>
          <p> Min Temp={info.tempMin}&deg;C</p>
          <p> Max Temp={info.tempMin}&deg;C</p>
          <b> <p> < AirSharpIcon/>The weather feels like <i>"{info.weather}"</i> </p></b>
           
        

        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}