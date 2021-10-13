import React, { useRef, cloneElement } from 'react';
import useContainerDimensions from "../../hooks/useContainerDimensions";

const Widget = ({ children, span = 1 }) => {
    const ref = useRef();
    const { width, height } = useContainerDimensions(ref);

    return (<div className={`p-4 shadow rounded-md col-span-${ span }`} ref={ref}>
        {cloneElement(children, { width, height })}
    </div>);
}

export default Widget;