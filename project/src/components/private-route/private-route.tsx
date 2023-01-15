import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/store';
import AuthorizationStatus from '../../types/authorization-status';

type Props = {
  children: JSX.Element;
};

const PrivateRoute: FC<Props> = ({ children }) => {
  const { authorizationStatus } = useAppSelector((state) => state);

  return authorizationStatus === AuthorizationStatus.Authorized
    ? children
    : <Navigate to={AppRoute.SignIn} />;
};

export default PrivateRoute;
