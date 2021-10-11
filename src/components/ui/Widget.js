import React from 'react';

const Widget = ({ children }) => {
    return (<div className="p-4 shadow">
        {children}
    </div>);
}

export default Widget;