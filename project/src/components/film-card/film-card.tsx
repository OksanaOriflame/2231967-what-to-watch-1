import { FC } from 'react';
import { Link } from 'react-router-dom';
import Film from '../../types/film';

type Props = {
  film: Film;
  onMouseOver: (film: Film) => void;
};

const FilmCard: FC<Props> = ({film, onMouseOver}) => {
  const { name, previewImage, id } = film;

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => onMouseOver(film)}>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>);
};

export default FilmCard;
