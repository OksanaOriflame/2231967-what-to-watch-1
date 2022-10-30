import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => (
  <>
    <h1>
      404 Page Not Found
    </h1>
    <Link to='/'>
      To the main page
    </Link>
  </>
);

export default NotFoundPage;
