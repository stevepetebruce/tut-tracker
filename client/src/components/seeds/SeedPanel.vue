
<template>

  <Panel title='Seeds' class="mt-4">
      <v-btn 
        slot="action"
        :to="{name: 'create'}"
        fab
        class="primary lighten-2"
        medium
        absolute
        right
        middle
        >
        <v-icon>add</v-icon></v-btn>

    <div v-for="seed in seeds" :key="seed.id">
      <v-layout>
        <v-flex xs9>
          <h2>{{seed.name}} <span class="sml"> - {{seed.category}}</span></h2>
        </v-flex>
        <v-flex xs3 >
          <v-btn color="primary" :to="{
            name: 'detail', 
            params:{ seedId: seed.id }}">
            View
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </Panel>
 
</template>

<script>
import SeedService from '@/services/seedService';
import Panel from '@/components/Panel';

export default {
  components: {
    Panel,
  },
  data() {
    return {
      seeds: null,
    };
  },
  // search seeds
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        this.seeds = (await SeedService.getSeeds(value)).data;
      },
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sml {
  font-size: 0.8rem;
}
</style>
