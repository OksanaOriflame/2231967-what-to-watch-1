import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Film from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type Props = {
  film: Film;
  onMouseOver: (film: Film) => void;
};

const FilmCard: FC<Props> = ({ film, onMouseOver }) => {
  const { name, id } = film;
  const [isPlay, setIsPlay] = useState(false);
  const [isStartPlay, setIsStartPlay] = useState(false);

  useEffect(() =>{
    let playState = true;

    if (isStartPlay)
    {
      setTimeout(() => {
        setIsPlay(playState);
      }, 1000);
    }

    return () => {
      playState = false;
    };
  }, [isStartPlay]);

  const handleMouseOver = () => {
    setIsStartPlay(true);
    onMouseOver(film);
  };

  const handleMouseLeave = () => {
    setIsPlay(false);
    setIsStartPlay(false);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image">
        <VideoPlayer film={film} isPlay={isPlay} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>);
};

export default FilmCard;
