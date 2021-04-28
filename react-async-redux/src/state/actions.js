import axios from 'axios';

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const RESULTS = 'RESULTS';
export const CHARACTERS = 'CHARACTERS';

export const searchAnime = (anime) => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get(`https://api.jikan.moe/v3/search/anime?q=${anime}`)
    .then((res) => {
      dispatch({ type: RESULTS, payload: res.data.results });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err });
    });
};

export const getCharacters = (id) => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get(`https://api.jikan.moe/v3/anime/${id}/characters_staff`)
    .then((res) => {
      dispatch({ type: CHARACTERS, payload: res.data.characters });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err });
    });
};
