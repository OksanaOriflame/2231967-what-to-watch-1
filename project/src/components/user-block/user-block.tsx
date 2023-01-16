import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { logOutAction } from '../../store/api-actions';
import AuthorizationStatus from '../../types/authorization-status';

const UserBlock: FC = () => {
  const { user, authorizationStatus } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(logOutAction());
  };

  if (authorizationStatus !== AuthorizationStatus.Authorized) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to="/login" className="user-block__link">Sign in</Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src={user?.avatarUrl} alt="User avatar" width={63} height={63} />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <span onClick={handleOnClick} className="user-block__link">Sign out</span>
      </li>
    </ul>
  );
};

export default UserBlock;
