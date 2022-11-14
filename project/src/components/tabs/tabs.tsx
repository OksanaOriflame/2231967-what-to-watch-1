import { FC, PropsWithChildren, useState } from 'react';
import TabItem from '../../types/tab';
import Tab from './tab';

type Wrapper = FC<PropsWithChildren>;

type Props = {
  tabsName: string;
  tabs: TabItem[];
  wrapper: Wrapper;
  listWrapper: Wrapper;
};

const Tabs: FC<Props> = ({ tabsName, tabs, wrapper: Wrapper, listWrapper: ListWrapper }) => {
  const [activeTab, setActiveTab] = useState(0);
  const onClick = (index: number) =>{
    setActiveTab(index);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((tab, i) => <Tab tabsName={tabsName} name={tab.name} isActive={i === activeTab} index={i} key={tab.name} onClick={onClick}/>)}
        </ul>
      </nav>
      {tabs[activeTab].content}
    </div>
  );
};

export default Tabs;
