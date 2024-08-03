import React, { useState, useEffect } from "react";

function Input(props) {
    const { name, id, input, type, onChange, checked, valcheck } = props;
    // const [inputValue, setInputValue] = useState('');
    const [val, setVal] = useState(input ? true : false); // 初始值取决于 input

    const handleChange = (event) => {
        if (event.target.value) {
            setVal(true);
        } else {
            setVal(false);
        }
        if (onChange) {
            onChange(event);
        }
    };


    useEffect(() => {
        if (type !== 'checkbox') {
            setVal(input ? true : false);
        }
        console.log('Form data changed:', input);
    }, [input, type, checked]);

    return (
        <label htmlFor={id} 
            className={`input-default ${val ? 'ok' : ''}`}
            style={{ border: valcheck ? '1px solid red' : 'none' }}>
            <input
                type={type}
                name={id}
                id={id}
                value={input}
                onChange={handleChange}
                checked={checked}
            />
            <span data-name={name}></span>
        </label>
    );
}

export default Input;
