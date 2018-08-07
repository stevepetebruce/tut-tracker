
<template>
      
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <slot name="action"/>
          </v-toolbar>

          <v-card-text>
            <slot>
              slot undefined
            </slot>     
          </v-card-text>
        </v-card>

</template>

<script>
export default {
  props: ['title'],
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
