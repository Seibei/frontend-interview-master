import { Movie } from '../services/types';

export interface MoviesState {
  user: User;
  moviesList: Movie[];
  filteredBy: string;
  currentPage: number;
  numberOfPages: number;
}

interface User {
  name: string;
  apiToken: string;
}
