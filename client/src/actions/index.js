import {SIGN_IN, SIGN_OUT} from './types';
import streams from '../apis/streams';

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

export const createStream = (formValues) => async (dispatch) => {
   const response = await streams.post('/streams',formValues);
}