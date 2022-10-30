import { FC } from 'react';
import SignInPage from '../../pages/sign-in/sign-in-page';

type AuthorizationStatus = {
  authorized: boolean;
  children: JSX.Element;
};

const Authorized: FC<AuthorizationStatus> = ({ authorized, children }) => (authorized ? children : <SignInPage />);

export default Authorized;
