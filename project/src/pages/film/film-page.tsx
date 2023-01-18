import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddFavoriteButton from '../../components/add-favorite-button/add-favorite-button';
import FilmList from '../../components/film-list/film-list';
import FilmPageTabs from '../../components/film-page-tabs/film-page-tabs';
import Logo from '../../components/logo/logo';
import PlayButton from '../../components/play-button/play-button';
import Spinner from '../../components/spinner/spinner';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { loadComments, loadFilm, loadSimilar } from '../../store/api-actions';
import AuthorizationStatus from '../../types/authorization-status';
import NotFoundPage from '../not-found/not-found-page';

const FilmPage: FC = () => {
  const filmId = Number(useParams().id);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {film, similar, comments, authorizationStatus} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!film || film.id !== filmId) {
      setIsLoading(true);
      dispatch(loadFilm(filmId));
      dispatch(loadSimilar(filmId));
      dispatch(loadComments(filmId));
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

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <div className="film-card__buttons">
                <PlayButton filmId={film.id} />
                <AddFavoriteButton filmId={film.id} />
                {authorizationStatus === AuthorizationStatus.Authorized && <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width={218} height={327} />
            </div>
            <FilmPageTabs film={film} comments={comments} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={similar} />
        </section>
        <footer className="page-footer">
          <Logo isLight />
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FilmPage;
