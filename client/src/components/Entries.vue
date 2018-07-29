
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <Panel title='Seeds'>
        <div v-for="seed in seeds" :key="">
          <h1>{{name}}</h1>
          <p>{{category}}</p>
        </div>
      </Panel>
    </v-layout>
  </v-container>
</template>

<script>
import SeedService from '@/services/seedService';
import Panel from '@/components/Panel';

export default {
  data () {
    seeds: null
  },
  async mounted() {
    this.seeds = await SeedService.getSeeds();
  },
  components: {
    Panel,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
