<template>
  <v-app>
    <v-main>
      <v-container class="fill-height container white--text" fluid>
        <v-row class="header" align="center" justify="center">
          <h1>Kithub API Service</h1>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-alert
              dense
              type="success"
              dismissible
              v-show="successRegister"
            >Your membership has been successfully created. Log in now.</v-alert>
            <v-card class="elevation-12">
              <v-toolbar class="register" v-if="registerPage" dark flat>
                <v-spacer></v-spacer>
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-toolbar color="login" dark v-else flat>
                <v-spacer></v-spacer>
                <v-toolbar-title class="title">Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    label="username"
                    name="username"
                    prepend-icon="mdi-account"
                    type="text"
                    required
                    v-model="username"
                    v-show="registerPage"
                  ></v-text-field>
                  <v-text-field
                    label="E-mail"
                    name="login"
                    prepend-icon="mdi-mail"
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
                <v-btn class="pa-5 register" dark @click="register" v-if="registerPage">Sign up</v-btn>
                <v-btn class="pa-5 login" dark @click="login" v-else>Log in</v-btn>
              </v-card-actions>
            </v-card>
            <v-row
              class="flex flex-column mt-15"
              align="center"
              justify="center"
              v-if="registerPage"
            >
              <span>Have an account?</span>
              <v-btn class="pa-5 mt-4 login" @click="goLogin" dark>Log in</v-btn>
            </v-row>
            <v-row class="flex flex-column mt-15" align="center" justify="center" v-else>
              <span>Don't have an account?</span>
              <v-btn class="pa-5 mt-4 register" @click="goSignUp" dark>Sign up for Kithub</v-btn>
            </v-row>
          </v-col>
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
      username: "",
      registerPage: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      valid: true,
      successRegister: false
    };
  },
  methods: {
    login() {
      axios
        .post(
          `http://localhost:3000/authenticate/email=${this.email}&password=${this.password}`
        )
        .then(response => {
          console.log(response);
          if (response.data.status == true && response.data.token) {
            this.$store.state.userInfo.token = response.data.token;
            this.saveUserInfo();
            this.$router.push("/profile");
          }
        })
        .catch(error => {
          alert(error);
        });
    },
    register() {
      axios
        .post(
          `http://localhost:3000/register/username=${this.username}&email=${this.email}&password=${this.password}`
        )
        .then(response => {
          console.log(response);
          if (response.data.password) {
            this.$store.dispatch("setUserInfo", {
              username: this.username,
              email: this.email,
              password: response.data.password,
              token: null
            });
            this.registerPage = false;
            this.successRegister = true;
          }
        })
        .catch(error => {
          alert(error);
        });
    },
    goSignUp() {
      this.registerPage = true;
    },
    goLogin() {
      this.registerPage = false;
    },
    saveUserInfo() {
      localStorage.setItem(
        "kithub-api-user-token",
        this.$store.state.userInfo.token
      );
      localStorage.setItem(
        "kithub-api-user-username",
        this.$store.state.userInfo.username
      );
    }
  }
};
</script>
<style lang="sass" scoped>
.container
    background: #673AB7
    background: -webkit-linear-gradient(to right, #512DA8, #673AB7)
    background: linear-gradient(to right, #512DA8, #673AB7)
    .header
        font-size: 24px
    .login
        background: #2980b9
        background: -webkit-linear-gradient(to right, #2980b9, #2960b9)
        background: linear-gradient(to right, #2980b9, #2960b9)
    .register
        background: #24BE41
        background: -webkit-linear-gradient(to right, #24BE41, #24CE21)
        background: linear-gradient(to right, #24BE41, #24CE21)





</style>