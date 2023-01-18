import { FC } from 'react';

type Props = {
  tabsName: string;
  name: string;
  isActive: boolean;
  index: number;
  onClick: (index: number) => void;
}

const Tab: FC<Props> = ({ tabsName, isActive, name, index, onClick }) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <li className={`${tabsName}__item${isActive ? ` ${tabsName}__item--active` : ''}`}>
      <div className={`${tabsName}__link`} onClick={handleClick}>{name}</div>
    </li>
  );
};

export default Tab;
