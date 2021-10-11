import React, { useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import '../../css/map.css';
import useWindowSize from '../../hooks/useWindowSize';

const Map = ({ coordinates, zoom }) => {
    const ref = useRef();

    return (
        <div className="map" style={{ "width": `${ 500 }px`, "height": `${ 500 }px` }} ref={ref}>
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