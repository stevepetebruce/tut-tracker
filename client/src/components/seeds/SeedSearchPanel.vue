
<template>

  <Panel title='Seed Search'>

    <v-text-field label="Search by name, description or category"
                name="search"
                v-model="search" />
  </Panel>  
  
</template>

<script>
import Panel from '@/components/Panel';
import _ from 'lodash';

export default {
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search: _.debounce(async function(value) {
      const route = {
        // route name
        name: 'entries',
      };
      // add search to query string
      if (this.search !== '') {
        route.query = {
          search: this.search,
        };
      }
      this.$router.push(route);
    }, 700),
    // if page refreshed route query string added to search input
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
  components: {
    Panel,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
