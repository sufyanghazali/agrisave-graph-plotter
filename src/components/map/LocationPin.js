import React, { useState } from 'react';

const LocationPin = ({ lat, lng, toggle }) => {
    // const [isHover, setIsHover] = useState()
    return (
        <div className="location-pin" onClick={() => { toggle() }}></div>
    )
}

export default LocationPin;