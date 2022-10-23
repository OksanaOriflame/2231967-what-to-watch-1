import Film from '../types/film';

const GetFilmById: (films: Film[], id: string | undefined) => Film | undefined = (films, id) => films.filter((x) => x.id === Number(id))[0];

export default GetFilmById;
