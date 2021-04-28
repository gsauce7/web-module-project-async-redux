import { LOADING, ERROR, RESULTS, CHARACTERS } from './actions';

const initialState = {
  error: '',
  loading: false,
  results: [],
  characters: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESULTS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return state;
  }
};
