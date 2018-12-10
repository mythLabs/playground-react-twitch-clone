import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";
import streams from "../apis/streams";

export const SignIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const SignOut = userId => {
  return {
    type: SIGN_OUT,
    payload: userId
  };
};

export const createStream = formValues => async (dispatch,getState) => {
  const { userId } = getState().auth
  const response = await streams.post("/streams", {...formValues,userId});
  
  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload:id});
};

export const updateStream = (id,formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};
