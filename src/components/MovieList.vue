<template>
  <ul class="movie-list">
    <MovieListItem
      v-for="(movie, index) in filtered"
      :key="index"
      :movie="movie"
      />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';
import MovieListItem from './MovieListItem.vue';

export default Vue.extend({
  name: 'MovieList',
  computed: {
    ...mapGetters([
      'filtered',
    ]),
    ...mapState([
      'moviesList',
    ]),
  },
  async created() {
    if (!this.moviesList.length) {
      await this.$store.dispatch('loadMovies');
    }
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
