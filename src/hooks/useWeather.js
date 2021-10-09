import { useState, useEffect } from 'react';

const useWeather = (lat, lon) => {
    const [data, setData] = useState();

    useEffect(() => {
        async function getWeatherData() {
            try {
                await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`)
                    .then(res => res.json())
                    .then(data => setData(data));
            } catch (err) {
                console.log(err);
            }
        };
        getWeatherData();
    }, [lat, lon]);

    return data;
}

export default useWeather;