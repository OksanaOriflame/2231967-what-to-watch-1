import { FC } from 'react';

type Props = {
  value: number;
  onChange: (value: number) => void;
}

const RatingStar: FC<Props> = ({value, onChange}) => (
  <>
    <input className="rating__input" id={`star-${value}`} type="radio" name="rating" defaultValue={value} onChange={(event) => onChange(parseInt(event.target.value, 10))}/>
    <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
  </>
);

export default RatingStar;
