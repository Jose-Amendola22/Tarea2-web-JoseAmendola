import React, {useEffect, useReducer, useState} from 'react';
import { LoginPayload } from '../imports/interfaces';
import { AuthState } from '../imports/interfaces';


type AuthAction = 
| { type: 'logout'}
| {type : 'login', payload: LoginPayload}


const initialState : AuthState= {
    validating : true,
    token: null,
    userName:'',
    password:'',
}

export const authReducer = (state : AuthState, action : AuthAction) : AuthState => {
    switch(action.type){
        case 'logout':
            return {
                ...initialState,
                validating : false,
            };
        case 'login':
            return {
                userName: action.payload.username,
                password: action.payload.password,
                validating : false,
                token : 'ABC123',
            };
        default:
            return state;
    }
}
