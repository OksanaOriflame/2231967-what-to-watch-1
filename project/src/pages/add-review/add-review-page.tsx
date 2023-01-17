import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import Spinner from '../../components/spinner/spinner';
import UserBlock from '../../components/user-block/user-block';
import api from '../../services/api';
import Film from '../../types/film';
import NotFoundPage from '../not-found/not-found-page';

const AddReviewPage: FC = () => {
  const {id: filmId} = useParams();
  const [film, setFilm] = useState<Film | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFilm = async () => {
      if (!filmId) {
        return;
      }
      const { data: filmData } = await api.get<Film>(`/films/${filmId}`);
      setFilm(filmData);
    };

    fetchFilm()
      .finally(() => setIsLoading(false));
  }, [filmId]);

  if (isLoading)
  {
    return (<Spinner />);
  }

  if (!film || !filmId)
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
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href={`films/${id}`} className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a href={`films/${id}/review`} className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width={218} height={327} />
        </div>
      </div>
      <ReviewForm filmId={filmId}/>
    </section>
  );
};

export default AddReviewPage;
