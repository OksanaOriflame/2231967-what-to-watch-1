import FilmCard from '../../components/film-card/film-card';
import FILMS from '../../mock/films';

const GetFilmCards: () => JSX.Element[] = () => FILMS.map((x) => <FilmCard key={x[0]} name={x[0]} imgRef={x[1]} />);

export default GetFilmCards;
