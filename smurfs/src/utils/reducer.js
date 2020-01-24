import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  NEW_SMURF_FAILURE,
  NEW_SMURF_FETCH,
  NEW_SMURF_SUCCESS
} from "./actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      };
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    case NEW_SMURF_FETCH: {
      return {
        ...state,
        isFetching: true
      };
    }
    case NEW_SMURF_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        smurfs: [...state.smurfs, action.payload]
      };
    }
    case NEW_SMURF_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
