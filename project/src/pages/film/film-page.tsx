import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import FilmPageTabs from '../../components/film-page-tabs/film-page-tabs';
import PlayButton from '../../components/play-button/play-button';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks/store';
import getFilmById from '../../utils/get-film';
import NotFoundPage from '../not-found/not-found-page';

const FilmPage: FC = () => {
  const {id: pathId} = useParams();
  const { films } = useAppSelector((state) => state);
  const film = getFilmById(films, pathId);
  const moreLikeThis = films.filter((x) => x.id !== film?.id && x.genre === film?.genre).slice(0, 4);

  if (film === undefined)
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
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
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
                <PlayButton film={film} />
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width={218} height={327} />
            </div>
            <FilmPageTabs film={film} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={moreLikeThis} />
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FilmPage;
