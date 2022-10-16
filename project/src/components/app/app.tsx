import { FC } from 'react';
import MainPage from '../../pages/main-page/main-page';

type Film = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
}

const film: Film = {
  promoFilmTitle: 'The Grand Budapest Hotel',
  promoFilmGenre: 'Drama',
  promoFilmYear: 2014
};

const App: FC = () => <MainPage promoFilm={film} />;

export default App;
