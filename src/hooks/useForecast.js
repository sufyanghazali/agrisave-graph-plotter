import { useState, useEffect } from "react";

const useForecast = (lat, lon) => {
    const [forecast, setForecast] = useState();

    useEffect(() => {
        async function getForecast() {
            try {
                await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric&exclude=current,minutely,hourly,alerts`)
                    .then(res => res.json())
                    .then(data => setForecast(data.daily.slice(0,4)));
            } catch (err) {
                console.log(err);
            }
        }
        getForecast();
    }, [lat, lon]);

    return forecast;
}

export default useForecast;