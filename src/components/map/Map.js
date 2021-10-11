import React, { useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import '../../css/map.css';

const Map = ({ coordinates, zoom }) => {
    const ref = useRef();

    return (
        <div className="map" ref={ref}>
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
        </div >
    );
}

export default Map;