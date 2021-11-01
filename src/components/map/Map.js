import React, { useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import '../../css/map.css';

const Map = ({ coordinates, zoom, height }) => {

    return (
        <div className="map" style={{
            height: `${height}px`
        }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
                defaultCenter={coordinates}
                defaultZoom={zoom}
                onClick={(e) => { console.log(e) }}
            >
                <LocationPin
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                />
                <LocationPin
                    lat={-31.961539815949678}
                    lng={115.87844704868773}
                />
            </GoogleMapReact>
        </div >
    );
}

export default Map;