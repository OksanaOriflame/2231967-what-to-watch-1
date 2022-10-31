import Film from '../types/film';

const getFilmById: (films: Film[], id: string | undefined) => Film | undefined = (films, id) => films.filter((x) => x.id === Number(id))[0];

export default getFilmById;
