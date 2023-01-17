import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import FilmPageTabs from '../../components/film-page-tabs/film-page-tabs';
import Logo from '../../components/logo/logo';
import PlayButton from '../../components/play-button/play-button';
import Spinner from '../../components/spinner/spinner';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks/store';
import api from '../../services/api';
import AuthorizationStatus from '../../types/authorization-status';
import Comment from '../../types/comment';
import Film from '../../types/film';
import NotFoundPage from '../not-found/not-found-page';

const FilmPage: FC = () => {
  const {id: filmId} = useParams();
  const [film, setFilm] = useState<Film | null>(null);
  const [similar, setSimilar] = useState<Film[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { authorizationStatus } = useAppSelector((state) => state);

  useEffect(() => {
    const fetchFilm = async () => {
      if (!filmId) {
        return;
      }
      const { data: filmData } = await api.get<Film>(`/films/${filmId}`);
      setFilm(filmData);
    };

    const fetchSimilar = async () => {
      if (!filmId) {
        return;
      }
      const { data: similarData } = await api.get<Film[]>(`/films/${filmId}/similar`);
      setSimilar(similarData);
    };

    const fetchComments = async () => {
      if (!filmId) {
        return;
      }
      const { data: commentsData } = await api.get<Comment[]>(`/comments/${filmId}`);
      setComments(commentsData);
    };

    fetchFilm()
      .then(() => fetchSimilar())
      .then(() => fetchComments())
      .finally(() => setIsLoading(false));
  }, [filmId]);

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
                <PlayButton film={film} />
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
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
