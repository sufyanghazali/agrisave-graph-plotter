import React from 'react';
import useForecast from "../../hooks/useForecast";
import ForecastInfo from './ForecastInfo';


const Forecast = ({ lat, long }) => {
    const forecast = useForecast(lat, long);

    console.log(forecast);

    if (forecast) {
        return (
            <div className="forecasts">
                {forecast.map((day, i) => {
                    return (
                        <ForecastInfo day={day} isToday={i === 0} />
                    );
                })}
            </div>
        )
    } else {
        return (
            <div>Loading</div>
        )
    }

}

export default Forecast;