import React, { useEffect, useCallback, useState } from 'react';

import * as queries from '../graphql/queries';
import { API } from 'aws-amplify';
import Map from './map/Map';
import Widget from './ui/Widget';
import WeatherContainer from './weather/WeatherContainer';
import GraphContainer from './graph/GraphContainer';


const Dashboard = () => {
    const [sensorData, setSensorData] = useState();
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState();

    const [showPanel, setShowPanel] = useState(false);

    const toggleSidePanel = () => {
        console.log("toggle called")
        setShowPanel(!showPanel);
    }

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


    // Functions to format data to pass to graphs

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
        <div className="dashboard">
            <div className="dashboard-grid">
                <Widget>
                    <WeatherContainer
                        weather={weather}
                        forecast={forecast}
                    />
                </Widget>

                <Widget>
                    <Map coordinates={coordinates} zoom={16} toggle={toggleSidePanel} />
                </Widget>
                <Widget>
                    <GraphContainer
                        data={getMoistureReadings()}
                        forecast={formatForecast()}
                        label="Moisture"
                        symbol="%"
                    />
                </Widget>
                <Widget>
                    <GraphContainer
                        data={getTemperatureReadings()}
                        forecast={formatForecast()}
                        label="Temperature"
                        symbol={'\u00b0C'}
                    />
                </Widget>
            </div>
        </div>
        :
        <div>
            Loading
        </div>
}

export default Dashboard;