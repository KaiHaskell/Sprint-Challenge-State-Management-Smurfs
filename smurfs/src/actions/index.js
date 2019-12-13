import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const NEW_SMURF_FETCH = "NEW_SMURF";
export const NEW_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const NEW_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`http://localhost:3333`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};
//Actions for new Smurfs
export const newSmurf = smurf => dispatch => {
  dispatch({ type: NEW_SMURF_FETCH });
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => {
      dispatch({ type: NEW_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: NEW_SMURF_FAILURE, payload: err });
    });
};
