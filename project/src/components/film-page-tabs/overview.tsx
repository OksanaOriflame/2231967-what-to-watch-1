import { FC } from 'react';
import Film from '../../types/film';

type Props = {
  film: Film;
}

const getRatingLevel = (rating: number) => {
  if (rating < 3) {
    return 'Bad';
  } else if (rating < 5) {
    return 'Normal';
  } else if (rating < 8) {
    return 'Good';
  } else if (rating < 10) {
    return 'Very good';
  } else {
    return 'Awesome';
  }
};

const Overview: FC<Props> = ({ film }) => (
  <>
    <div className="film-rating">
      <div className="film-rating__score">{film.rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getRatingLevel(film.rating)}</span>
        <span className="film-rating__count">{film.scoresCount} ratings</span>
      </p>
    </div>
    <div className="film-card__text">
      <p>{film.description}</p>
      <p className="film-card__director"><strong>Director: {film.director}</strong></p>
      <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')} and other</strong></p>
    </div>
  </>
);

export default Overview;
