import React, { useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import '../../css/map.css';

const Map = ({ coordinates, zoom, toggle }) => {
    const ref = useRef();

    const createMapOptions = (maps) => {
        return {
            styles: [
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ]
        }
    }

    return (
        <div className="map" ref={ref}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
                defaultCenter={coordinates}
                defaultZoom={zoom}
                options={createMapOptions}
            >
                <LocationPin
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                    toggle={toggle}
                />
            </GoogleMapReact>
        </div >
    );
}

export default Map;