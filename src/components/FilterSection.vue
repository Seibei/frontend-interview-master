<template>
  <div class="filter-section">
    <button
      v-for="(item, index) in filters"
      :key="index"
      @click="filterBy(item.filter)">{{ item.title }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
  name: 'MovieList',
  data: () => ({
    filters: [
      { title: 'All', filter: '' },
      { title: 'Movies', filter: 'movie' },
      { title: 'Series', filter: 'series' },
    ],
  }),
  methods: {
    ...mapMutations([
      'filterBy',
    ]),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
