import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';
import getFilmById from '../../utils/get-film';
import NotFoundPage from '../not-found/not-found-page';

const PlayerPage: FC = () => {
  const {id: pathId} = useParams();
  const { films } = useAppSelector((state) => state);
  const film = getFilmById(films, pathId);

  if (film === undefined)
  {
    return (<NotFoundPage />);
  }

  const {backgroundImage, videoLink, runTime, name, id} = film;

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={backgroundImage} />
      <Link type="button" className="player__exit" to={`/films/${id}`}>Exit</Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100} />
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">{runTime}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
