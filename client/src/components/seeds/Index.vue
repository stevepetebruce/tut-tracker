
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 >
        <seed-search-panel />
        <seed-panel />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SeedPanel from './SeedPanel';
import SeedSearchPanel from './SeedSearchPanel';
import Panel from '../../components/Panel';

export default {
  components: {
    Panel,
    SeedPanel,
    SeedSearchPanel,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sml {
  font-size: 0.8rem;
}
</style>
