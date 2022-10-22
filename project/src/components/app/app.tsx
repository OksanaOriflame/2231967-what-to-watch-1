import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReviewPage from '../../pages/add-review/add-review-page';
import FilmPage from '../../pages/film/film-page';
import MainPage from '../../pages/main-page/main-page';
import MyListPage from '../../pages/my-list/my-list-page';
import NotFoundPage from '../../pages/not-found/not-found-page';
import PlayerPage from '../../pages/player/player-page';
import SignInPage from '../../pages/sign-in/sign-in-page';
import Film from '../../types/film';
import Authorized from '../authorized/authorized';

const promoFilm: Film = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014
};

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<MainPage promoFilm={promoFilm} />} />
      <Route path={'/login'} element={<SignInPage />} />
      <Route path={'/mylist'} element={
        <Authorized authorized={false}>
          <MyListPage />
        </Authorized>
      }
      />
      <Route path={'/films/:id'} element={<FilmPage />} />
      <Route path={'/films/:id/review'} element={<AddReviewPage />} />
      <Route path={'/player'} element={<PlayerPage />} />
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
