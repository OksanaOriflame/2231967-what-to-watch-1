import { FC } from 'react';
import Overview from './overview';
import TabItem from '../../types/tab';
import Film from '../../types/film';
import Tabs from '../tabs/tabs';
import FilmPageTabsWrapper from './film-page-tabs-wrapper';
import FilmPageTabsListWrapper from './film-page-tabs-list-wrapper';
import Details from './details';
import Reviews from './reviews';
import Comment from '../../types/comment';

type Props = {
  film: Film;
  comments: Comment[];
}

const FilmPageTabs: FC<Props> = ({ film, comments }) => {
  const tabs: TabItem[] = [
    {
      name: 'Overview',
      content: <Overview film={film} />
    },
    {
      name: 'Details',
      content: <Details film={film} />
    },
    {
      name: 'Reviews',
      content: <Reviews comments={comments} />
    }
  ];

  return (
    <Tabs tabsName="film-nav" tabs={tabs} tabsWrapper={FilmPageTabsWrapper} tabsListWrapper={FilmPageTabsListWrapper}/>
  );
};

export default FilmPageTabs;
