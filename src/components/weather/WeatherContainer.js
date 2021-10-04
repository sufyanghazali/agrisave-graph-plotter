import React from 'react';
import Forecast from './Forecast';
import './weather-icons/weather-icons.min.css';
import '../../css/weather.css';
import { getIcon } from "../../util";

const WeatherContainer = ({ weather, forecast}) => {
    // const { name } = weather;
    // const { description } = weather.weather[0];
    // const { speed } = weather.wind;
    // const { humidity, temp, temp_max, temp_min } = weather.main;
    // const icon = getIcon(weather.weather[0].icon);

    console.log("WeatherContainer rendering");


    return (
        // <div>
        //     <div className="weather">
        //         <div className="weather-tile weather-info">
        //             <span className="city">{name}</span>
        //             <span className="temp-current">{Math.round(temp)} C</span>
        //             <span className="temp-range">{Math.round(temp_max)} / {Math.round(temp_min)} C</span>
        //             <div className="weather-info--secondary" >
        //                 <span>Wind: {speed} km/h</span>
        //                 <span>Humidity: {humidity} %</span>
        //             </div>
        //         </div>

        //         <div className="weather-tile weather-image">
        //             <i className={`wi ${icon} weather-icon`}></i>
        //             <span className="weather-desc">{description}</span>
        //         </div>
                <Forecast forecast={forecast}/>
        //     </div>
        // </div>
    );

}

export default WeatherContainer;