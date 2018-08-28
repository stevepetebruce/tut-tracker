
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 >
        <panel title="Register">
          <v-form>
              <v-text-field id="email" type="email"
                name="email"
                v-model="email"
                placeholder="email" />
              <br>
              <v-text-field id="password"  type="password"
                name="password"
                v-model="password"
                placeholder="password" />

              <br>
              <v-btn color="primary" @click="register">Register</v-btn>

              <div class="danger-alert" v-html="error"></div>

          </v-form>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import Panel from '@/components/Panel';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$router.push({
          name: 'entries',
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
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
