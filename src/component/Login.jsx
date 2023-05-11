import React, { useState, useEffect } from "react";
import style from "../style/style";
import { useAlert } from 'react-alert';

const Login = () => {

    const alert = useAlert();

    const [loginAccount, setLoginAccount] = useState('');
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const handleInputAccount = (e) => {
        setAccount(e.target.value);
    }

    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        alert.show(`Welcome back ${account}~`);
        window.localStorage.setItem('userInfo', account);
        setLoginAccount(window.localStorage.getItem('userInfo'));
    }

    const handleLogout = () => {
        alert.show(`Goodbye ${loginAccount}`);
        window.localStorage.removeItem('userInfo');
        setLoginAccount(window.localStorage.getItem('userInfo'));
    }

    useEffect(() => {
        const userInfo = window.localStorage.getItem('userInfo');
        console.log(userInfo);
        if (userInfo) setLoginAccount(userInfo);
    }, []);

    if (loginAccount) {
        return (
            <div
                className="loginContainer"
                style={style.Login.loginContainer}
            >
                <h1>Welcome {loginAccount}</h1>

                 {/* logout button */}
                 <button 
                    className="loginBtn"
                    style={style.Login.loginBtn}
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        );
    } else {
        return (
            <div
                className="loginContainer"
                style={style.Login.loginContainer}
            >
                <h2>User Information</h2>
                {/* Account input field */}
                <div
                    className="loginInputContainer"
                    style={style.Login.loginInputContainer}
                >
                    <p>Account :</p>
                    <input
                        type="text"
                        className="loginInputAccount"
                        style={style.Login.loginInputField}
                        placeholder="Enter your Account Name"
                        onChange={handleInputAccount}
                    />
                </div>
    
                {/* password input field */}
                <div
                    className="loginInputContainer"
                    style={style.Login.loginInputContainer}
                >
                    <p>Password:</p>
                    <input
                        type="password"
                        className="loginInputAccount"
                        style={style.Login.loginInputField}
                        placeholder="Enter your Password"
                        onChange={handleInputPassword}
                    />
                </div>
    
                {/* submit button */}
                <button 
                    className="loginBtn"
                    style={style.Login.loginBtn}
                    disabled={account === '' || password === ''}
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        );
    }
};

export default Login;