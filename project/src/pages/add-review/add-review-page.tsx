import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReviewForm from '../../components/review-form/review-form';
import Film from '../../types/film';
import getFilmById from '../../utils/get-film';
import NotFoundPage from '../not-found/not-found-page';

type Props = {
  films: Film[];
}

const AddReviewPage: FC<Props> = ({films}) => {
  const {id: pathId} = useParams();

  const film = getFilmById(films, pathId);

  if (film === undefined)
  {
    return (<NotFoundPage />);
  }

  const { id, backgroundImage, name, posterImage } = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href={`films/:${id}`} className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="/" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </li>
            <li className="user-block__item">
              <a href="/" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width={218} height={327} />
        </div>
      </div>
      <ReviewForm />
    </section>
  );
};

export default AddReviewPage;
