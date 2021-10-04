import React, { useEffect, useState } from 'react';

const useHistoricalWeather = (lat, lon, time) => {
    const [history, setHistory] = useState();


    useEffect(() => {
        async function getHistoricalWeather() {
            try {
                await fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${process.env.REACT_APP_WEATHER_API}`)
                    .then(res => res.json())
                    .then(data => console.log(data));
            } catch (err) {
                console.log(err);
            }
        }
        getHistoricalWeather();
    }, [lat, lon, time]);

    return history;
}

export default useHistoricalWeather;