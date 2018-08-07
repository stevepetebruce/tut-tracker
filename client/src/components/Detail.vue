
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs4 >
        <panel title='Detail'>
        
            <v-text-field id="name"
              name="name"
              required
              :rules="[rules.required]"
              v-model="seed.name"
              label="name" />

            <v-text-field id="category"
              name="category"
              required
              :rules="[rules.required]"
              v-model="seed.category"
              label="category" />
   
            <v-text-field id="imageUrl"
              name="imageUrl"
              v-model="seed.imageUrl"
              label="image Url" />

            <v-text-field id="sow"
              name="sow"
              required
              :rules="[rules.required]"
              v-model="seed.sow"
              label="When to Sow" />

            <v-text-field id="harvest"
              name="harvest"
              required
              :rules="[rules.required]"
              v-model="seed.harvest"
              label="When to harvest" />
            <br>
            <v-btn color="primary" @click="Submit">Submit</v-btn>
            
         
        </panel>
      </v-flex>

      <v-flex xs8 >
        <panel class="ml-4">
          <v-textarea id="onlineDescription"
              name="onlineDescription"
              v-model="seed.onlineDescription"
              label="Online Description">
            </v-textarea>
    
            <v-textarea id="description"
              name="description"
              v-model="seed.description"
              label="Final Description">
            </v-textarea>
         
            <v-textarea id="tips"
              name="tips"
              v-model="seed.tips"
              label="tips">
            </v-textarea>
            
          </panel>
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
      seed: {
        category: null,
        name: null,
        onlineDescription: null,
        description: null,
        imageUrl: null,
        sow: null,
        harvest: null,
        tips: null,
      },
      rules: {
        required: value => !!value || 'Required',
      },
    };
  },
  methods: {
    async Submit() {
      try {
        // call API
        await SeedService.postSeed(this.seed);
        this.$router.push({
          name: 'entries',
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
