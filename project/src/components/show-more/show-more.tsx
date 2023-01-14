import { FC } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { incrementShowedFilmsCount } from '../../store/action';

const ShowMore: FC = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = () =>{
    dispatch(incrementShowedFilmsCount());
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => handleOnClick()}>Show more</button>
    </div>
  );
};

export default ShowMore;
