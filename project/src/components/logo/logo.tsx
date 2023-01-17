import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type Props = {
  isLight?: boolean;
}

const Logo: FC<Props> = ({ isLight }) => (
  <div className="logo">
    <Link to={AppRoute.Main} className={isLight ? 'logo__link logo__link--light' : 'logo__link'}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

export default Logo;
