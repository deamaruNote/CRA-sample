import React, { useState } from "react";

function InputPassword(props) {
    const { name, id, input, onChange, valcheck = 0, onBlur } = props;
    const [val, setVal] = useState(input ? true : false); // Input
    const [open, setOpen] = useState(false);
    const [checkword, setCheckword] = useState('var(--grey)'); // 驗證密碼位數
    const [checknum, setChecknum] = useState('var(--grey)');   // 驗證密碼數字

    // input change
    const handleChange = (event) => {
        // 密碼是否可看
        if (event.target.value) {
            setVal(true);
        } else {
            setVal(false);
        }
        // 輸入
        if (onChange) {
            onChange(event); // 綁定
            if ((event.target.value).length >= 8) {
                setCheckword('#4AE7A5');
            } else {
                setCheckword('var(--grey)');
            }
            if (/\d/.test(event.target.value)) {
                setChecknum('#4AE7A5');
            } else {
                setChecknum('var(--grey)')
            }
        }
    };

    return (
        <>
            <div className="row col">
                <label htmlFor={id}
                    className={`input-default ${val ? 'ok' : ''}`}
                    style={{ border: valcheck ? '1px solid red' : 'none' }}>
                    <input
                        type={open ? 'text' : 'password'}
                        name={id}
                        id={id}
                        value={input}
                        onBlur={onBlur}
                        onChange={handleChange}
                    />
                    <span data-name={name}></span>
                    <button type="button" onClick={() => setOpen(!open)} className={`check-eye ${open ? 'open' : ''}`}>
                        <svg width="19" height="20" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8792 9.63021C18.7095 9.39802 14.6652 3.94482 9.49991 3.94482C4.33461 3.94482 0.290122 9.39802 0.120569 9.62999C-0.0401895 9.85027 -0.0401895 10.149 0.120569 10.3693C0.290122 10.6015 4.33461 16.0547 9.49991 16.0547C14.6652 16.0547 18.7095 10.6015 18.8792 10.3695C19.0402 10.1493 19.0402 9.85027 18.8792 9.63021ZM9.49991 14.802C5.69511 14.802 2.39976 11.1826 1.42426 9.99934C2.39849 8.81507 5.68695 5.19757 9.49991 5.19757C13.3045 5.19757 16.5996 8.81633 17.5756 10.0002C16.6013 11.1844 13.3129 14.802 9.49991 14.802Z" fill="#757575" />
                            <path d="M9.49991 6.2417C7.42765 6.2417 5.74165 7.92769 5.74165 9.99996C5.74165 12.0722 7.42765 13.7582 9.49991 13.7582C11.5722 13.7582 13.2582 12.0722 13.2582 9.99996C13.2582 7.92769 11.5722 6.2417 9.49991 6.2417ZM9.49991 12.5054C8.11833 12.5054 6.99443 11.3815 6.99443 9.99996C6.99443 8.61841 8.11836 7.49448 9.49991 7.49448C10.8815 7.49448 12.0054 8.61841 12.0054 9.99996C12.0054 11.3815 10.8815 12.5054 9.49991 12.5054Z" fill="#757575" />
                        </svg>
                    </button>
                </label>
            </div>
            <div className={`row ps-group ${!open ? 'd-none' : ''}`} >
                <span className="ps-type">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5.5" cy="5.5" r="5.5" fill={checkword} />
                        <path d="M3 6.18182L5.08333 8L8 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    8 Characters min.</span>
                <span className="ps-type">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5.5" cy="5.5" r="5.5" fill={checknum} />
                        <path d="M3 6.18182L5.08333 8L8 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    One number</span>
            </div>
        </>
    );
}

export default InputPassword;
