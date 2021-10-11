import React, { useEffect, useCallback, useState, useRef } from 'react';

import * as queries from '../graphql/queries';
import { API } from 'aws-amplify';
import Graph from './graph/Graph';
import WeatherContainer from './weather/WeatherContainer';
import Map from './map/Map';
import Widget from './ui/Widget';

import useWindowSize from '../hooks/useWindowSize';

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
    }, [coordinates.lat, coordinates.lng]);

    const getMoistureReadings = useCallback(() => {
        return sensorData.items.map(reading => ({ x: reading.unixTimeStamp, y: +reading.deviceMos }))
    }, [sensorData]);

    const getTemperatureReadings = useCallback(() => {
        return sensorData.items.map(reading => ({ x: reading.unixTimeStamp, y: +reading.deviceTemp }))
    }, [sensorData]);

    const formatForecast = useCallback(() => {
        return forecast.map(day => ({ x: day.dt * 1000, y: day.temp.day }))
    }, [forecast]);

    return (sensorData && forecast) ?
        <div className="dashboard py-8 px-16">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl xl:grid-cols-3 gap-4">
                <Widget>
                    <WeatherContainer weather={weather} forecast={forecast} />
                </Widget>
                <Widget>
                    <Map coordinates={coordinates} zoom={16} />
                </Widget>
                <Widget>
                    <Graph data={getMoistureReadings()} forecast={formatForecast()} yLabel="Moisture" />
                </Widget>
                <Widget>
                    <Graph data={getTemperatureReadings()} forecast={formatForecast()} yLabel="Temperature  " />
                </Widget>
            </div>
        </div>
        :
        <div>
            Loading
        </div>
}

export default Dashboard;