import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
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
  const { isDataLoading } = useAppSelector((state) => state);

  if (isDataLoading) {
    return (<Spinner/>);
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <RefreshShowMore />
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute>
            <MyListPage />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<FilmPage />} />
        <Route path={AppRoute.Review} element={
          <PrivateRoute>
            <AddReviewPage />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path={AppRoute.Default} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
