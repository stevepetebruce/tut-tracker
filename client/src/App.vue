<template>
  <v-app>

    <page-header/>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
import pageHeader from '@/components/Header';

export default {
  name: 'App',
  components: {
    pageHeader,
  },
};
</script>

<style>
</style>
