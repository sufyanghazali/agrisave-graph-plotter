import React, { useRef, cloneElement } from 'react';
import useContainerDimensions from "../../hooks/useContainerDimensions";

const Widget = ({ children }) => {
    const ref = useRef();
    const { width, height } = useContainerDimensions(ref);

    console.log(height);

    return (<div className={`p-4 shadow rounded-md`} ref={ref}>
        {cloneElement(children, { width, height })}
    </div>);
}

export default Widget;