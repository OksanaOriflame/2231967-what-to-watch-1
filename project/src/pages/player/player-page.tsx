import { FC, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { loadFilm } from '../../store/api-actions';
import NotFoundPage from '../not-found/not-found-page';

const PlayerPage: FC = () => {
  const filmId = Number(useParams().id);
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);
  const { film } = useAppSelector((state) => state);
  const [duration, setDuration] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!film || film.id !== filmId) {
      setIsLoading(true);
      dispatch(loadFilm(filmId));
    }

    setIsLoading(false);
  }, [filmId, dispatch, film]);

  if (isLoading)
  {
    return (<Spinner />);
  }

  if (!film)
  {
    return (<NotFoundPage />);
  }

  const {videoLink, name, id, backgroundImage} = film;

  const getProgress = () => currentTime / duration * 100;
  const formatTime = (time: number) => {
    const evenTime = Math.round(time);
    return new Date(evenTime * 1000).toISOString().substring(11, 19);
  };

  const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    setCurrentTime(event.currentTarget.currentTime);
  };

  const handleVideoLoaded = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    setDuration(event.currentTarget.duration);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handlePlayClick = () => {
    if (!videoPlayerRef.current) {
      return;
    }

    setIsPlaying(!isPlaying);

    if (isPlaying) {
      videoPlayerRef.current?.pause();
    } else {
      videoPlayerRef.current?.play();
    }
  };

  const handleFullScreenClick = () => {
    if (!videoPlayerRef.current){
      return;
    }

    videoPlayerRef.current.requestFullscreen();
  };

  return (
    <div className="player">
      <video
        ref={videoPlayerRef}
        src={videoLink}
        className="player__video"
        poster={backgroundImage}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleVideoLoaded}
        onEnded={handleVideoEnded}
        autoPlay={isPlaying}
        muted
      />
      <Link type="button" className="player__exit" to={`/films/${id}`}>Exit</Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={getProgress()} max={100} />
            <div className="player__toggler" style={{ left: `${getProgress()}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">{`-${formatTime(duration - currentTime)}`}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayClick}>
            <svg viewBox="0 0 19 19" width={19} height={19}>
              {isPlaying ? <use xlinkHref="#pause" /> : <use xlinkHref="#play-s" />}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>
          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
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
