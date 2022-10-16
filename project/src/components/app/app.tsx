import { FC } from 'react';
import MainPage from '../../pages/main-page/main-page';
import PromoFilm from '../../types/promo-film';

const film: PromoFilm = {
  promoFilmTitle: 'The Grand Budapest Hotel',
  promoFilmGenre: 'Drama',
  promoFilmYear: 2014
};

const App: FC = () => <MainPage promoFilm={film} />;

export default App;
