import { FC, PropsWithChildren } from 'react';

const FilmPageTabsListWrapper: FC<PropsWithChildren> = ({ children }) => (
  <nav className="film-nav film-card__nav">
    <ul className="film-nav__list">
      children
    </ul>
  </nav>
);

export default FilmPageTabsListWrapper;
