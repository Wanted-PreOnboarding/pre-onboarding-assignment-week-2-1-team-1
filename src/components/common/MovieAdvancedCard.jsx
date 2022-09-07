import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieCardContainer } from './MovieCard';
import { GET_POSTER } from '../../util/getPoster';
import PropType from 'prop-types';

const MovieAdvancedCard = ({ movieInfo }) => {
  const navigator = useNavigate();
  const { adult, id, title, poster_path, popularity, release_data, vote_average, vote_count } =
    movieInfo;

  return (
    <MovieCardContainer
      className="extended"
      onClick={() => {
        navigator(`/movie/${id}`);
      }}
    >
      <div>
        <img src={`${GET_POSTER}${poster_path}`} alt={`${title} 포스터`} />
      </div>
      <p>{title}</p>
      <span>{adult === true || '성인용🔞로고 확인'} </span>
      <span>popularity{popularity} </span>
      <span>release_data{release_data} </span>
      <span>vote_average{vote_average} </span>
      <span>vote_count{vote_count} </span>
    </MovieCardContainer>
  );
};

export default MovieAdvancedCard;

MovieAdvancedCard.propTypes = {
  movieInfo: PropType.object,
};

// MovieAdvancedCard.propTypes = {
//   id: PropType.number,
//   posterPath: PropType.string,
//   title: PropType.string,
//   popularity: PropType.number,
// };
