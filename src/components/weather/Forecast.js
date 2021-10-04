import React from 'react';
import useForecast from "../../hooks/useForecast";
import ForecastInfo from './ForecastInfo';

const Forecast = ({ forecast }) => {
    return (
        <div className="forecasts">
            {forecast.map((day, i) => {
                return (
                    <ForecastInfo day={day} isToday={i === 0} key={day.dt} />
                );
            })}
        </div>
    );
}

export default Forecast;