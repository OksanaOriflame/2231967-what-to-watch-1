import { FC, MouseEventHandler } from 'react';

type Props = {
  tabsName: string;
  name: string;
  isActive: boolean;
  index: number;
  onClick: (index: number) => void;
}

const Tab: FC<Props> = ({ tabsName, isActive, name, index, onClick }) => {
  const handleOnClick: MouseEventHandler = (e) => {
    e.preventDefault();
    onClick(index);
  };

  return (
    <li className={`${tabsName}__item${isActive ? ` ${tabsName}__item--active` : ''}`}>
      <a href="/" className={`${tabsName}__link`} onClick={handleOnClick}>{name}</a>
    </li>
  );
};

export default Tab;
