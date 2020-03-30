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
import { mapState, mapActions } from 'vuex';

export default Vue.extend({
  name: 'MovieView',
  async created() {
    this.loadMovie(this.$route.params.movieId);
  },
  computed: {
    ...mapState([
      'movie',
    ]),
  },
  methods: {
    ...mapActions([
      'loadMovie',
    ]),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
