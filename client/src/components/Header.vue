<template>
  <v-toolbar>
    <v-toolbar-title>Seed Tracker &nbsp;</v-toolbar-title>
    <v-toolbar-items>
      <v-btn 
      flat 
      router
      :to= "{
        name: 'entries',
        }"
      >Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
      v-if="!$store.state.isUserLoggedIn"
      flat 
      router
      :to="{
        name: 'login',
        }"
      >Login</v-btn>
      <v-btn 
      v-if="!$store.state.isUserLoggedIn"
      flat 
      router
      :to= "{
        name: 'register',
        }"
      >Sign Up</v-btn>

      <v-btn 
      v-if="$store.state.isUserLoggedIn"
      flat 
      router
      @click="logout"
      >Log out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  data: () => ({}),
  props: {},
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'entries',
      });
    },
  },
};
</script>
