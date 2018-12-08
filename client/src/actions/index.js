import {SIGN_IN, SIGN_OUT} from './types';

export const SignIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const SignOut = (userId) =>{
    return {
        type: SIGN_OUT,
        payload: userId
    }
}