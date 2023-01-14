import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/store';
import { refreshShowedFilmsCount } from '../../store/action';

function RefreshShowMore() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshShowedFilmsCount());
    // eslint-disable-next-line
  }, [pathname]);

  return null;
}

export default RefreshShowMore;
