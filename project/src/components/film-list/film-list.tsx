import { FC, useState } from 'react';
import Film from '../../types/film';
import FilmCard from '../film-card/film-card';

type Props = {
  films: Film[];
};

const FilmList: FC<Props> = ({films}) => {
  const [, setActiveFilm] = useState<Film | null>(null);

  const handleMouseOver = (film: Film) => setActiveFilm(film);

  return (
    <div className="catalog__films-list">
      {films.map((x) => <FilmCard key={x.id} onMouseOver={handleMouseOver} film={x} />)}
    </div>);
};

export default FilmList;
