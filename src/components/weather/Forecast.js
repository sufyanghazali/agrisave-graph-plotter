import React from 'react';
import ForecastInfo from './ForecastInfo';

const Forecast = ({ forecast }) => {

    let items = [];
    for (let i = 0; i < 4; i++) {
        items.push(<ForecastInfo day={forecast[i]} isToday={i === 0} key={forecast[i].dt} />)
    }

    return (
        <div className="forecasts">
            {items}
        </div>
    );
}

export default Forecast;