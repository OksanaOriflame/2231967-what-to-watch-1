import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { changeGenre, refreshShowedFilmsCount } from '../../store/action';
import Genre from '../../types/genre';

type Props = {
  genres: Genre[];
};

const GenreList: FC<Props> = ({ genres }) => {
  const { activeGenre } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = (genre: Genre) =>
  {
    dispatch(changeGenre(genre));
    dispatch(refreshShowedFilmsCount());
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item catalog__genres-item${genre === activeGenre ? '--active' : ''}`}>
          <span className="catalog__genres-link" onClick={() => handleChangeActiveGenre(genre)}>
            {genre}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
