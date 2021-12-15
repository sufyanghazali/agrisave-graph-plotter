import React, { useRef, cloneElement } from 'react';
import useContainerDimensions from "../../hooks/useContainerDimensions";

const Widget = ({ children, span = 1 }) => {

    return (<div className={`p-4 shadow rounded-md col-span-${ span }`}>
        {/* {cloneElement(children, { width, height })} */}
        {children}
    </div>);
}

export default Widget;