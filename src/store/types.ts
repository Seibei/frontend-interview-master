import { Movie, MovieDetail } from '../services/types';

export interface MoviesState {
  user: User;
  moviesList: Movie[];
  movie: MovieDetail | {};
  filteredBy: string;
  currentPage: number;
  numberOfPages: number;
}

interface User {
  name: string;
  apiToken: string;
}
