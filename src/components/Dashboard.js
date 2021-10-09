import React, { useEffect, useState } from 'react';

import * as queries from '../graphql/queries';
import { API } from 'aws-amplify';
import GraphContainer from './graph/GraphContainer';
import WeatherContainer from './weather/WeatherContainer';
import Map from './map/Map';

console.log(API);

const Dashboard = () => {
    const [sensorData, setSensorData] = useState();
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState();

    useEffect(() => {
        async function getSensorData() {
            try {
                // Fetch data from database
                await API.graphql({
                    query: queries.queryIotCatalogsBySerialNumberIndex,
                    variables: {
                        // TODO: serial number should be passed in as argument
                        serialNumber: "AGRIM8-SN3302",
                    }
                })
                    .then(res => {
                        // Query doesn't return data in order
                        const data = res.data.queryIotCatalogsBySerialNumberIndex;
                        // Sort data by time
                        data.items.sort((a, b) => a.unixTimeStamp - b.unixTimeStamp);
                        setCoordinates({
                            lat: +data.items[0].deviceLat,
                            lng: +data.items[0].deviceLon
                        });
                        setSensorData(data);
                    })
            } catch (err) {
                console.log(err);
            }
        }
        getSensorData();
    }, []);

    useEffect(() => {
        async function getWeather() {
            try {
                await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${ coordinates.lat }&lon=${ coordinates.lng }&appid=${ process.env.REACT_APP_WEATHER_API }&units=metric&exclude=minutely,alerts`)
                    .then(res => res.json())
                    .then(data => {
                        setWeather(data.current);
                        setForecast(data.daily);
                    })
            } catch (err) {
                console.log(err);
            }
        }
        getWeather();
    }, [coordinates.lat, coordinates.lng])

    return (sensorData && forecast) ?
        <div className="dashboard">
            <div className="sensor-visual">
                <WeatherContainer weather={weather} forecast={forecast} />
                <Map coordinates={coordinates} zoom={16} />
            </div>
            <GraphContainer sensor={sensorData} forecast={forecast} />
        </div>
        :
        <div>
            Loading
        </div>
}

export default Dashboard;