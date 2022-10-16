import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MainPage from '../../pages/main-page/main-page';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import PromoFilm from '../../types/promo-film';
import Authorized from '../authorized/authorized';

const film: PromoFilm = {
  promoFilmTitle: 'The Grand Budapest Hotel',
  promoFilmGenre: 'Drama',
  promoFilmYear: 2014
};

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<MainPage promoFilm={film} />} />
      <Route path={'/login'} element={<SignIn />} />
      <Route path={'/mylist'} element={
        <Authorized authorized={false}>
          <MyList />
        </Authorized>
      }
      />
      <Route path={'/films/:id'} element={<Film />} />
      <Route path={'/films/:id/review'} element={<AddReview />} />
      <Route path={'/player'} element={<Player />} />
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
