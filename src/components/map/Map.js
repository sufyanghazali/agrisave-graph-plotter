import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import '../../css/map.css';


const Map = ({ sensor, zoom }) => {
    const coord = {
        lat: +sensor.deviceLat,
        lng: +sensor.deviceLon
    }

    return (
        <div className="map">

            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
                defaultCenter={coord}
                defaultZoom={zoom}
            >
                <LocationPin
                    lat={coord.lat}
                    lng={coord.lng}
                />
            </GoogleMapReact>
        </div>
    );
}

export default Map;