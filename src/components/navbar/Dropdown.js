import React, { useState } from 'react';
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Dropdown = ({ user }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <div className="main">
                {user.username}
            </div>
            {open && (
                <div className="dropdown--options">
                    <div className="option">option</div>
                    <div className="option">option</div>
                    <div className="option">option</div>
                    {user ? <AmplifySignOut className="test" /> : null}
                </div>
            )}
        </div>
    )
}

export default Dropdown;