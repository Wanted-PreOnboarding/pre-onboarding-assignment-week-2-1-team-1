import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieCardContainer } from './MovieCard';
import { GET_POSTER } from '../../util/getPoster';
import PropType from 'prop-types';

const MovieAdvancedCard = ({ id, title, posterPath, popularity }) => {
  const navigator = useNavigate();

  return (
    <MovieCardContainer
      className="extended"
      onClick={() => {
        navigator(`/movie/${id}`);
      }}
    >
      <div>
        <img src={`${GET_POSTER}/${posterPath}`} alt={`${title} 포스터`} />
      </div>
      <p> {title} </p>
      <p>{popularity}</p>
    </MovieCardContainer>
  );
};

export default MovieAdvancedCard;

MovieAdvancedCard.propTypes = {
  id: PropType.number,
  posterPath: PropType.string,
  title: PropType.string,
  popularity: PropType.number,
};
