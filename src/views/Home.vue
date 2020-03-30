<template>
  <div class="home">
    <img alt="Batman logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello #TODO#, which batman movie do you want to see?"/>
    <PageManagment/>
    <FilterSection/>
    <MovieList/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import MovieList from '@/components/MovieList.vue';
import FilterSection from '@/components/FilterSection.vue';
import PageManagment from '@/components/PageManagment.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MovieList,
    FilterSection,
    PageManagment,
  },
};
</script>
