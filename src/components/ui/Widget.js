import React from 'react';

const Widget = ({ children, span = 1 }) => {
    return (<div className={`p-4 shadow rounded-md col-span-${ span }`}>
        {children}
    </div>);
}

export default Widget;