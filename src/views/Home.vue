<template>
  <div class="home">
    <img alt="Batman logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello #TODO#, which batman movie do you want to see?"/>
    <LoadMore/>
    <FilterSection/>
    <MovieList/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import MovieList from '@/components/MovieList.vue';
import FilterSection from '@/components/FilterSection.vue';
import LoadMore from '@/components/LoadMore.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MovieList,
    FilterSection,
    LoadMore,
  },
};
</script>
