import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city : "WonderLand",
        feelsLike: 35.18,
        humidity: 51,
        max: 32.3,
        min: 32.3,
        temp: 32.3,
        weather: "broken clouds"
    });

    let updateInfo = (newInfo) => {
       setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign : "center"}}>
            <h1>Weather App by Priyanshu</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}