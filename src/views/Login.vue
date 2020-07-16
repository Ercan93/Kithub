<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row class="header" align="center" justify="center">
          <h1>Kithub API Service</h1>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="success" v-if="registerPage" dark flat>
                <v-spacer></v-spacer>
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-toolbar color="primary" v-else dark flat>
                <v-spacer></v-spacer>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    label="E-mail"
                    name="login"
                    prepend-icon="mdi-account"
                    type="email"
                    :rules="emailRules"
                    required
                    v-model="email"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    required
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="pa-5" color="success" dark @click="login" v-if="registerPage">Sign up</v-btn>
                <v-btn class="pa-5" color="primary" dark @click="register" v-else>Log in</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="flex flex-column" align="center" justify="center" v-if="registerPage">
          <span>Have an account?</span>
          <v-btn class="pa-5 mt-4" color="primary" @click="goLogin" dark>Log in</v-btn>
        </v-row>
        <v-row class="flex flex-column" align="center" justify="center" v-else>
          <span>Don't have an account?</span>
          <v-btn class="pa-5 mt-4" color="success" @click="goSignUp" dark>Sign up for Kithub</v-btn>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      registerPage: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      valid: true
    };
  },
  methods: {
    goSignUp() {
      this.registerPage = true;
    },
    goLogin() {
      this.registerPage = false;
    }
  }
};
</script>
<style lang="sass" scoped>
.header
    padding-bottom: 20px
    border-bottom: solid 1px darkgrey


</style>