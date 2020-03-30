<template>
  <div class="page-managment">
    <button
      class="prev-button"
      @click="loadMore('setPrevPage')">Prev page</button>
    <button
      class="next-button"
      @click="loadMore('setNextPage')">Next page</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'PageManagment',
  methods: {
    ...mapActions([
      'loadMore',
    ]),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .page-managment {
    margin: 10px 0;
  }
</style>
