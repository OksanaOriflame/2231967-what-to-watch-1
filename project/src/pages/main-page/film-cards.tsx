import FilmCard from '../../components/film-card/film-card';

function GetRef(name: string): string {
  return `img/${name
    .toLowerCase()
    .replaceAll(':', '')
    .replaceAll(' ', '-')}.jpg`;
}

function GetFilmCards(): JSX.Element[] {
  return [
    'Fantastic Beasts: The Crimes of Grindelwald',
    'Bohemian Rhapsody',
    'Macbeth',
    'Aviator',
    'We need to talk about Kevin',
    'What We Do in the Shadows',
    'Revenant',
    'Johnny English',
    'Shutter Island',
    'Pulp Fiction',
    'No Country for Old Men',
    'Snatch',
    'Moonrise Kingdom',
    'Seven Years in Tibet',
    'Midnight Special',
    'War of the Worlds',
    'Dardjeeling Limited',
    'Orlando',
    'Mindhunter',
    'Midnight Special'
  ].map<JSX.Element>((x) => <FilmCard key={x} name={x} srcRef={GetRef(x)} />);
}

export default GetFilmCards;
