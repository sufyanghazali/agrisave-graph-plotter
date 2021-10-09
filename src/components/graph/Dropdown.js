import React from 'react';

const Dropdown = ({ options, id, selectedValue, onSelectedValueChange }) => {
    return (
        <select name="pets" id={id} onChange={e => onSelectedValueChange(e.target.value)} defaultValue={selectedValue}>
            {options.map(({ value, label }) => (
                < option key={value} value={value} > {label}</option>
            ))}
        </select>
    )
}

export default Dropdown;
