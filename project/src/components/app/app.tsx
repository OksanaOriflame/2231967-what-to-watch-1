import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';
import AddReviewPage from '../../pages/add-review/add-review-page';
import FilmPage from '../../pages/film/film-page';
import MainPage from '../../pages/main-page/main-page';
import MyListPage from '../../pages/my-list/my-list-page';
import NotFoundPage from '../../pages/not-found/not-found-page';
import PlayerPage from '../../pages/player/player-page';
import SignInPage from '../../pages/sign-in/sign-in-page';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import RefreshShowMore from '../show-more/refresh-show-more';
import Spinner from '../spinner/spinner';

const App: FC = () => {
  const { films, isDataLoading } = useAppSelector((state) => state);

  if (isDataLoading) {
    return (<Spinner/>);
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <RefreshShowMore />
      <Routes>
        <Route path={'/'} element={<MainPage promoFilm={films[0]} />} />
        <Route path={'/login'} element={<SignInPage />} />
        <Route path={'/mylist'} element={
          <PrivateRoute authorized={false}>
            <MyListPage films={films} />
          </PrivateRoute>
        }
        />
        <Route path={'/films/:id'} element={<FilmPage films={films} />} />
        <Route path={'/films/:id/review'} element={<AddReviewPage films={films} />} />
        <Route path={'/player'} element={<PlayerPage film={films[0]} />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
