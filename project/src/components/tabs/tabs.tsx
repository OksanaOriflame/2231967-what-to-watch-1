import { FC, PropsWithChildren, useState } from 'react';
import TabItem from '../../types/tab';
import Tab from './tab';

type Wrapper = FC<PropsWithChildren>;

type Props = {
  tabsName: string;
  tabs: TabItem[];
  tabsWrapper: Wrapper;
  tabsListWrapper: Wrapper;
};

const Tabs: FC<Props> = ({ tabsName, tabs, tabsWrapper: TabsWrapper, tabsListWrapper: TabsListWrapper }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleOnClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <TabsWrapper>
      <TabsListWrapper>
        {tabs.map((tab, i) => <Tab tabsName={tabsName} name={tab.name} isActive={i === activeTab} index={i} key={tab.name} onClick={handleOnClick} />)}
      </TabsListWrapper>
      {tabs[activeTab].content}
    </TabsWrapper>
  );
};

export default Tabs;
