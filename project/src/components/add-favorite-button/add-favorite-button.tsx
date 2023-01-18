import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { setIsFavoriteFilm } from '../../store/api-actions';
import AuthorizationStatus from '../../types/authorization-status';

type Props = {
  filmId: number;
}

const AddFavoriteButton: FC<Props> = ({ filmId }) => {
  const { favoriteFilms, authorizationStatus } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const isFavorite =
    authorizationStatus === AuthorizationStatus.Authorized
    && favoriteFilms.some((film) => film.id === filmId);

  const handleAddFavoriteButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatch(setIsFavoriteFilm({ filmId: filmId, isFavorite: !isFavorite}));
  };

  const buttonComponents = (
    <>
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={isFavorite ? '#in-list' : '#add'} />
      </svg>
      <span>My list</span>
      {authorizationStatus === AuthorizationStatus.Authorized && <span className="film-card__count">{favoriteFilms.length}</span>}
    </>
  );

  return authorizationStatus === AuthorizationStatus.Authorized ?
    (
      <button className="btn btn--list film-card__button" type="button" onClick={handleAddFavoriteButton}>
        {buttonComponents}
      </button>
    ) :
    (
      <Link to={AppRoute.SignIn} className="btn btn--list film-card__button" type="button">
        {buttonComponents}
      </Link>
    );
};

export default AddFavoriteButton;
