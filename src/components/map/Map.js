import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import '../../css/map.css';

const Map = ({ coordinates, zoom }) => {

    console.log("Map rendering");

    return (
        <div className="map">

            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
                defaultCenter={coordinates}
                defaultZoom={zoom}
            >
                <LocationPin
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                />
            </GoogleMapReact>
        </div>
    );
}

export default Map;