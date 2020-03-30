<template>
  <ul class="movie-list">
    <MovieListItem
      v-for="movie in filtered"
      :key="movie.imdbID"
      :movie="movie"
      />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import MovieListItem from './MovieListItem.vue';

export default Vue.extend({
  name: 'MovieList',
  computed: {
    ...mapGetters([
      'filtered',
    ]),
  },
  async created() {
    await this.loadMovies();
  },
  methods: {
    ...mapActions([
      'loadMovies',
      'sortMovies',
    ]),
  },
  components: {
    MovieListItem,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .movie-list {
    width: 60%;
    margin: 0 auto;
  }
</style>
