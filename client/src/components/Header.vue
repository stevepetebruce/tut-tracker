<template>
  <v-toolbar>
    <v-toolbar-title>Tracker &nbsp;</v-toolbar-title>
    <v-toolbar-items>
      <v-btn 
      flat 
      router
      to="browse"
      >Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
      v-if="!$store.state.isUserLoggedIn"
      flat 
      router
      to="login"
      >Login</v-btn>
      <v-btn 
      v-if="!$store.state.isUserLoggedIn"
      flat 
      router
      to="register"
      >Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  data: () => ({}),
  props: {},
};
</script>
