
<template>
      <v-flex xs12 sm8 md6 >
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
            <v-card-text>
              <slot>
                slot undefined
              </slot>     
            </v-card-text>
        </v-card>
      </v-flex>
</template>

<script>
export default {
  props: ['title'],
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
