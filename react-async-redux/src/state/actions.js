import axios from 'axios';

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const RESULTS = 'RESULTS';

export const searchAnime = () => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get(`https://api.jikan.moe/v3/search/anime?q=dragonball`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err });
    });
};
