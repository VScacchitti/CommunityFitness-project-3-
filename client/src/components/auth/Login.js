import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import UserContext from "../UserContext";
import Logo from "../../components/Logo";
import Axios from "axios";
import ErrorNotice from "../ErrorNotice";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    let history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
        const loginUser = { email, password };
        const loginRes = await Axios.post(
            "/api/user/login",
             loginUser
            );
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/");
    } catch(err) {
        err.response.data.msg && setError(err.response.data.msg);
        }
    };
    return (
      <div>
      <Logo />
        <div className="login-form">
            {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
            )}
            <form onSubmit={submit}>
                <label htmlFor="login-email">Email</label>
                <input id="login-email" 
                type="email" 
                onChange={e => setEmail(e.target.value)} 
                />

                <label htmlFor="login-password">Password</label>
                <input id="login-password" 
                type="password" 
                onChange={e => setPassword(e.target.value)}     
                />

                <input id="login" type="submit" value="Login" />
            </form>
        </div>
        </div>
    )
}
