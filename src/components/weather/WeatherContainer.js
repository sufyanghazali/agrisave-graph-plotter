import React from 'react';
import Forecast from './Forecast';
import './weather-icons/weather-icons.min.css';
import '../../css/weather.css';
import { getIcon } from "../../util";

const WeatherContainer = ({ weather, forecast }) => {
    // const { name } = weather;
    const { description } = weather.weather[0];
    const { humidity, temp, wind_speed } = weather;
    const icon = getIcon(weather.weather[0].icon);

    return (
        <div>
            <div className="weather">
                <div className="weather-tile weather-info">
                    {/* <span className="city">{name}</span> */}
                    <span className="text-4xl">{Math.round(temp)} C</span>
                    {/* <span className="temp-range">{Math.round(temp_max)} / {Math.round(temp_min)} C</span> */}
                    <div className="" >
                        <span>Wind: {wind_speed} km/h</span>
                        <span>Humidity: {humidity} %</span>
                    </div>
                </div>

                <div className="weather-tile weather-image">
                    <i className={`wi ${ icon }`}></i>
                    <span className="">{description}</span>
                </div>
                <Forecast forecast={forecast} />
            </div>
        </div>
    );

}

export default WeatherContainer;