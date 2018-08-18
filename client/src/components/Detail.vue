
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs4 >
        <panel title='Detail'>
        
            <h1>{{seed.name}}</h1>

            <h2>{{seed.category}}</h2>

            <p><img :src="seed.imageUrl" width="200"></p>
            <p>{{seed.sow}}</p>
            <p>{{seed.harvest}}</p>
            <h3>Tips</h3>
            <v-textarea 
              readonly
              v-model="seed.tips"
            >
          </v-textarea>
        </panel>
      </v-flex>

      <v-flex xs8>
        <panel class="ml-4" title='Description'>
          <h3>Online Description</h3>
          <v-textarea 
            readonly
            v-model="seed.onlineDescription"
          >
          </v-textarea>
          <h3>Final Description</h3>
           <pre>{{seed.description}}</pre> 
           <v-textarea
            readonly
            v-model="seed.description"
          >
          </v-textarea> 

          <v-btn color="primary" @click="navigateToEdit({
            name: 'edit',
            params: { seedId: seed.id }
          })">Edit</v-btn>
          </panel>
        </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import SeedService from '@/services/seedService';
import Panel from '@/components/Panel';

export default {
  data() {
    return {
      seed: {},
    };
  },
  async mounted() {
    const seedId = this.$store.state.route.params.seedId;
    this.seed = (await SeedService.showSeed(seedId)).data;
  },
  components: {
    Panel,
  },
  methods: {
    navigateToEdit(route) {
      this.$router.push(route);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
