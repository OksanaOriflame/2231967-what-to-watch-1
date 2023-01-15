export const DEFAULT_SHOWED_FILMS_COUNT = 8;
export const SHOWED_FILMS_COUNT_STEP = 8;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id',
  Default = '*'
}
