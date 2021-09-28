import React from 'react';
import { getIcon } from '../../util';


const ForecastInfo = ({ day, isToday }) => {


    const date = new Date(day.dt * 1000);
    const dateString = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
    const temp = day.temp.day;
    const desc = day.weather[0].description;
    const icon = getIcon(day.weather[0].icon);

    return (
        <div className="forecast">
            <div>
                {isToday ? "Today" : dateString}
            </div>
            <i className={`wi ${icon} weather-icon`}></i>
            <div>
                {Math.round(temp)}
            </div>
        </div>
    );

}

export default ForecastInfo;