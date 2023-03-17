import { useState, FormEvent, useReducer } from "react";
import React from 'react';
import useForm from "../hooks/useForm.ts";
import { authReducer } from "./Reducer.tsx";
import { AuthState } from "../imports/interfaces.ts";
import "../css/form.css";

function UseFormTest() {

    const initialState : AuthState= {
        validating : true,
        token: null,
        userName:'',
        password:'',
    }

    //const [{values}, handleChange] = useForm(initialState);
    //desectructurado
    const [state, dispatch] = useReducer(authReducer, initialState);
    const [{userName, password}, handleChange] = useForm(initialState);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);

        if (userName === 'admin' && password === '1234') {
            dispatch({ type: 'login', payload: { username: userName, password: password } });
            setErrorMessage('');
        }else{
            setErrorMessage('Invalid username or password.');
        }
    };

    const logout = () => {
        dispatch({ type: 'logout' });
        setSubmitted(false);
    };

    return (
        <div>
            {!state.token ? (
                <div className="wrapper">
                    <div className="text-center mt-4 name">
                        Tarea 2
                        </div>
                        <form className="p-3 mt-3" onSubmit={login}>
                            <div className="form-field d-flex align-items-center">
                                <span className="far fa-user"></span>
                                <input
                                    type="text"
                                    name="userName"
                                    value={userName}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="form-field d-flex align-items-center">
                                <span className="fas fa-key"></span>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <button type="submit" className="btn mt-3">Login</button>
                            {submitted && errorMessage && <p>{errorMessage}</p>}
                        </form>
                </div>
            ):(
                <div>
                    <h3>Welcome, {state.userName}!</h3>
                    <button onClick={logout}>Logout</button>
                    <br></br>
                    <img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves"  width="250" />
                </div>
            )}
        </div>
    );
}



export default UseFormTest;
