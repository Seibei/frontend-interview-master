<template>
  <li class="movie-list-item">
    <p>{{ movie.Title }}</p>
    <router-link :to="`/movies/${movie.imdbID}`">Details</router-link>
  </li>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Movie } from '@/services/types';

export default Vue.extend({
  name: 'MovieListItem',
  props: {
    movie: {
      type: Object,
    } as PropOptions<Movie>,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .movie-list-item {
    margin: 10px 0 0 0;
    padding: 10px 20px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #dedede;
    text-align: left;
    p {
      min-width: 300px;
    }
    a {
      text-decoration: none;
      color: blue;
    }
  }
</style>
