import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';
import MovieService from '@/services/MovieService';
import { Movie, MovieDetail } from '../services/types';
import { MoviesState } from './types';

Vue.use(Vuex);

const state: MoviesState = {
  user: {
    name: 'Bob Razowski',
    apiToken: '273b9080',
  },
  moviesList: [],
  movie: {},
  filteredBy: '',
  currentPage: 1,
  numberOfPages: 0,
};

const getters = {
  filtered(state: MoviesState): Movie[] {
    if (!state.filteredBy) {
      return state.moviesList;
    }
    return state.moviesList.filter((m: {Type: string}) => m.Type === state.filteredBy);
  },
};

const mutations = {
  setMoviesList(state: MoviesState, moviesList: Movie[]): void {
    state.moviesList = [...moviesList];
  },
  addToCurrent(state: MoviesState, moviesList: Movie[]): void {
    state.moviesList = [...state.moviesList, ...moviesList];
  },
  setMovie(state: MoviesState, movie: MovieDetail): void {
    state.movie = movie;
  },
  filterBy(state: MoviesState, type: string): void {
    state.filteredBy = type;
  },
  setNextPage(state: MoviesState): void {
    if (state.currentPage < state.numberOfPages) {
      state.currentPage += 1;
    }
  },
  setNumberOfPages(state: MoviesState, payload: number): void {
    state.numberOfPages = payload;
  },
};

const actions = {
  async loadMovies({ state, commit }: ActionContext<MoviesState, MoviesState>): Promise<void> {
    try {
      const result = await MovieService.movieService.getMovieList(state.user.apiToken, state.currentPage);
      commit('setMoviesList', result.result);
      commit('setNumberOfPages', Math.ceil(result.numberOfResult / 10));
    } catch (e) {
      console.log(e);
    }
  },
  async loadMovie({ state, commit }: ActionContext<MoviesState, MoviesState>, id: string): Promise<void> {
    try {
      const result = await MovieService.movieService.getSpecificMovie(state.user.apiToken, id);
      commit('setMovie', result);
    } catch (e) {
      console.log(e);
    }
  },
  async loadMore({ commit }: ActionContext<MoviesState, MoviesState>): Promise<void> {
    try {
      const result = await MovieService.movieService.getMovieList(state.user.apiToken, state.currentPage);
      commit('addToCurrent', result.result);
    } catch (e) {
      console.log(e);
    }
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
