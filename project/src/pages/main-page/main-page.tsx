import { FC } from 'react';
import FilmList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import Genre from '../../types/genre';
import { useAppSelector } from '../../hooks/store';
import ShowMore from '../../components/show-more/show-more';
import UserBlock from '../../components/user-block/user-block';
import PlayButton from '../../components/play-button/play-button';
import Logo from '../../components/logo/logo';

const MainPage: FC = () => {
  const { films, promoFilm, activeGenre, showedFilmsCount } = useAppSelector((state) => state);
  const genres = [Genre.ALL_GENRES, ...new Set(films.map((film) => film.genre))] as Genre[];
  const filteredFilms = films.filter((film) => film.genre === activeGenre || activeGenre === Genre.ALL_GENRES);
  const hasMoreFilms = filteredFilms.length > showedFilmsCount;
  const { name: title, genre, released, posterImage, backgroundImage, id } = promoFilm ? promoFilm : films[0];

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt="The Grand Budapest Hotel poster" width={218} height={327} />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <div className="film-card__buttons">
                <PlayButton filmId={id}/>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList genres={genres}></GenreList>
          <FilmList films={filteredFilms.slice(0, showedFilmsCount)} />
          {hasMoreFilms && <ShowMore />}
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

export default MainPage;
