import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  NEW_SMURF_FETCH,
  NEW_SMURF_SUCCESS,
  NEW_SMURF_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
      case FETCH_SUCCESS:
          return {
              ...state,
            smurfs: action.payload,
            isFetching: false,
            error: ''
          }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false, 
                error: action.payload
            }
        case NEW_SMURF_FETCH: 
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isFetching: false
            }    
        case NEW_SMURF_SUCCESS
  } 
};
