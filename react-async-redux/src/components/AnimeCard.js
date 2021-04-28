import React from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../state/actions';

function AnimeCard({ anime, getCharacters }) {
  const { mal_id, image_url, title, score, rated, airing } = anime;
  return (
    <div onClick={() => getCharacters(mal_id)}>
      <div>
        <img src={image_url} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>Score: {score}</p>
        <p>Rating: {rated}</p>
        <p>Is Airing Currently: {airing}</p>
      </div>
    </div>
  );
}

export default connect(null, { getCharacters })(AnimeCard);
