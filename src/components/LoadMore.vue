<template>
  <div class="load-more">
    <button @click="load">Load more</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'LoadMore',
  computed: {
    ...mapState([
      'currentPage',
      'numberOfPages',
    ]),
  },
  methods: {
    load() {
      if (this.currentPage >= this.numberOfPages) return;
      this.$store.commit('setNextPage');
      this.$store.dispatch('loadMore');
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .load-more {
    margin: 10px 0;
  }
</style>
