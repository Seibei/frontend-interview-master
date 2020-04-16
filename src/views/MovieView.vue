<template>
  <div class="movie-view">
    <h1>{{ movie.Title }}</h1>
    <img
      :src="movie.Poster"
      :alt="movie.Title">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import MovieService from '@/services/MovieService';
import { Movie } from '@/services/types';

export default Vue.extend({
  name: 'MovieView',
  async created() {
    await this.loadMovie();
  },
  data: () => ({
    movie: {} as Movie,
  }),
  computed: {
    ...mapState([
      'user',
    ]),
  },
  methods: {
    async loadMovie() {
      try {
        const result = await MovieService.movieService.getSpecificMovie(this.user.apiToken, this.$route.params.movieId);
        this.movie = result;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
