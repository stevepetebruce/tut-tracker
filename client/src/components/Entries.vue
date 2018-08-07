
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 >
        <Panel title='Seeds'>
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
      </v-flex>
    </v-layout>
  </v-container>
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
  async mounted() {
    this.seeds = (await SeedService.getSeeds()).data;
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sml{
  font-size: 0.8rem;
}
</style>
