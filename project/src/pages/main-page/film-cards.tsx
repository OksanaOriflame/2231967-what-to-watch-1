import FilmCard from '../../components/film-card/film-card';
import FILMS from '../../mock/films';

const GetFilmCards: () => JSX.Element[] = () => FILMS.map((x) => <FilmCard key={x.name} name={x.name} img={x.img} />);

export default GetFilmCards;
