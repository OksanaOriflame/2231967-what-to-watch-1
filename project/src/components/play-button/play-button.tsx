import { FC } from 'react';
import { Link } from 'react-router-dom';
import Film from '../../types/film';

type Props = {
  film: Film;
};

const PlayButton: FC<Props> = ({ film: { id } }) => (
  <Link to={`/player/${id}`} className="btn btn--play film-card__button" type="button">
    <svg viewBox="0 0 19 19" width={19} height={19}>
      <use xlinkHref="#play-s" />
    </svg>
    <span>Play</span>
  </Link>
);

export default PlayButton;
