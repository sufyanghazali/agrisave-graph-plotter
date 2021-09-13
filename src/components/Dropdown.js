import React from 'react';

const Dropdown = ({ options, id, selectedValue, onSelectedValueChange }) => {
    return (
        <select name="pets" id={id} onChange={e => onSelectedValueChange(e.target.value)}>
            {options.map(({ value, label }) => (
                < option value={value} selected={value === selectedValue}> {label}</option>
            ))}
        </select>
    )
}

export default Dropdown;
