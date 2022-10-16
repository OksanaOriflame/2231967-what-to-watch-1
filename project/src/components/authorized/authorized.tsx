import { FC } from 'react';
import SignIn from '../../pages/sign-in/sign-in';

type AuthorizationStatus = {
  authorized: boolean;
  children: JSX.Element;
};

const Authorized: FC<AuthorizationStatus> = ({ authorized, children }) => (authorized ? children : <SignIn />);

export default Authorized;
