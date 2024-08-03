import React, { useState } from "react";
import Input from "./Input";
import InputPassword from './InputPassword';

function Cardbody(props) {
    // Pre-Data
    const { handleChange } = props;
    // Form-Data
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [account, setAccount] = useState(false);
    // Touch
    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    });
    const [valcheck, setValcheck] = useState({
        firstname: 0,
        lastname: 0,
        email: 0,
        password: 0,
    });
    // Danger-Hint(span display-style)
    const [hint, setHint] = useState({
        require: 0,
    });
    // ==================================== //
    // Verify(red border-style)
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({ ...touched, [name]: true });
        handleValidate();
    };
    const handleValidate = () => {
        // border-error
        setValcheck((prevFormData) => ({
            ...prevFormData,
            firstname: firstname === '' ? 1 : 0,
            lastname: lastname === '' ? 1 : 0,
            email: /^\S+@\S+\.\S+$/.test(email) ? 0 : 1,
        }));
    };

    // 點擊SUBMIT
    const onSubmit = () => {
        let new_formdata = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            checktype: account,
        };

        //傳回資料
        handleChange(new_formdata);

        if ((password).length >= 8 && /\d/.test(password)) {
            setValcheck((prevFormData) => ({
                ...prevFormData,
                password: 0,
            }));
        } else {
            setValcheck((prevFormData) => ({
                ...prevFormData,
                password: 1,
            }));
        };
        // 例外處理
        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            password: true,
        });
        handleValidate();
        setHint(() => ({
            require: Object.values(valcheck).every(it => it === 0) ? 0 : 1,
        }));
        if(Object.values(valcheck).every(it => it === 0)){
            alert("OK!")
        }
    };

    return (
        <>
            <div className="card-body">
                <form action="">
                    <h2>
                        Start from free
                    </h2>
                    <h1>
                        Create an account
                    </h1>
                    {/* 錯誤提示文字 */}
                    <div className={`row danger-hint ${hint.require ? '' : 'd-none'}`} >
                        <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#D71920" d="M12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 6.4775 18.0225 2 12.5 2ZM13.75 18.25H11.25V15.75H13.75V18.25ZM13.75 14.5H11.25V7H13.75V14.5Z" />
                        </svg>
                        Please complete all the required fields to proceed.
                    </div>
                    <div className="row col-2">
                        <button type="button" className="btn-default">
                            <svg width="16" height="16" style={{ transform: 'translateY(1px)' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8 6.4V9.6H12.5264C11.8656 11.4624 10.0864 12.8 8 12.8C5.3536 12.8 3.2 10.6464 3.2 8C3.2 5.3536 5.3536 3.2 8 3.2C9.1472 3.2 10.2512 3.6112 11.1088 4.3584L13.2112 1.9456C11.7712 0.6912 9.9216 0 8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8V6.4H8Z"
                                />
                            </svg>
                            Sign up with Google
                        </button>
                        <button type="button" className="btn-default">
                            <svg width="17" height="16" style={{ transform: 'translateY(1px)' }} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_7326_43)">
                                    <path
                                        d="M11.1647 2.65667H12.6253V0.112667C12.3733 0.078 11.5067 0 10.4973 0C8.39133 0 6.94867 1.32467 6.94867 3.75933V6H4.62467V8.844H6.94867V16H9.798V8.84467H12.028L12.382 6.00067H9.79733V4.04133C9.798 3.21933 10.0193 2.65667 11.1647 2.65667Z"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_7326_43">
                                        <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Sign up with Facebook
                        </button>
                    </div>
                    <h4>Or use your email for registration &nbsp;</h4>
                    <div className="row col-2">
                        <Input name="First Name"
                            id="firstName" type="text"
                            value={firstname}
                            valcheck={valcheck.firstname}
                            touched={touched.firstName}
                            onBlur={handleBlur}
                            onChange={(event) => setFirstname(event.target.value)} />
                        <Input name="Last Name"
                            id="lastName" type="text"
                            value={lastname}
                            valcheck={valcheck.lastname}
                            touched={touched.lastName}
                            onBlur={handleBlur}
                            onChange={(event) => setLastname(event.target.value)} />
                    </div>
                    <div className="row col">
                        <Input name="E-mail"
                            id="email" type="email"
                            value={email}
                            valcheck={valcheck.email}
                            touched={touched.email}
                            onBlur={handleBlur}
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    {/* 錯誤提示文字 */}
                    <InputPassword name="password"
                        id="password"
                        value={password}
                        valcheck={valcheck.password}
                        touched={touched.password}
                        onBlur={handleBlur}
                        onChange={(event) => setPassword(event.target.value)} />
                    <label htmlFor="account" className="account">
                        <input type="checkbox" className="input-check"
                            name="" id="account" checked={account}
                            onChange={(event) => setAccount(event.target.checked)} />
                        <span className="checkmark"></span>
                        By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification
                        settings.
                    </label>
                    <button type="button" className="btn-default-fill" onClick={onSubmit}>
                        Create an Free Account!
                    </button>
                    <div className="row">
                        <span className="hint">
                            Already have an account? <div className="link">Log in</div>
                        </span>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Cardbody;