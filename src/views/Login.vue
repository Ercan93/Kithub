<template>
  <v-app>
    <v-main>
      <v-container class="fill-height container white--text" fluid>
        <v-row class="header" align="center" justify="center">
          <h1>Kithub API Service</h1>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-alert dense type="info">
              Network Error hatası alırsanız,
              Firefox Tarayıcısı ile Cors everywhere eklentisini kullanarak sisteme giriş yapmayı deneyin.
              <br />
              <a
                href="https://addons.mozilla.org/tr/firefox/addon/cors-everywhere/"
                style="color:white"
                target="_blank"
              >Cors Everywhere eklentisi</a>
            </v-alert>
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
                    :rules="usernameRules"
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
                    :rules="passwordRules"
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
              class="flex flex-column mt-5"
              align="center"
              justify="center"
              v-if="registerPage"
            >
              <span>Have an account?</span>
              <v-btn class="pa-5 mt-4 login" @click="goLogin" dark>Log in</v-btn>
            </v-row>
            <v-row class="flex flex-column mt-5" align="center" justify="center" v-else>
              <span>Don't have an account?</span>
              <v-btn class="pa-5 mt-4 register" @click="goSignUp" dark>Sign up for Kithub</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <app-footer></app-footer>
    </v-main>
  </v-app>
</template>
<script>
import appFooter from "@/components/appFooter";
export default {
  name: "LoginPage",
  components: { appFooter },
  data() {
    return {
      email: "",
      password: "",
      username: "",
      registerPage: false,
      usernameRules: [
        (v) => !!v || "Username is required",
        (v) =>
          (v && v.length >= 5 && v.length <= 12) ||
          "Username must have 5+ characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 8) || "Password must have 5+ characters",
      ],
      valid: true,
      successRegister: false,
    };
  },
  created() {
    let localToken = localStorage.getItem("kithub-api-user-token");
    let localUsername = localStorage.getItem("kithub-api-user-username");
    if (localToken && localUsername) {
      this.$router.push("/profile");
    }
  },
  methods: {
    login() {
      axios
        .post(
          `https://kithub-books.herokuapp.com/authenticate/email=${this.email}&password=${this.password}`
        )
        .then((response) => {
          if (response.data.status == true && response.data.token) {
            this.$store.state.userInfo.token = response.data.token;
            this.$store.state.userInfo.email = this.email;
            localStorage.setItem("kithub-api-user-token", response.data.token);
            localStorage.setItem("kithub-api-user-email", this.email);
            this.$router.push("/profile");
          }
        })
        .catch((error) => {
          alert(error);
        });
    },
    register() {
      axios
        .post(
          `https://kithub-books.herokuapp.com/register/username=${this.username}&email=${this.email}&password=${this.password}`
        )
        .then((response) => {
          if (response.data.password) {
            this.$store.dispatch("setUserInfo", {
              email: this.email,
              token: null,
            });
            this.registerPage = false;
            this.successRegister = true;
          }
        })
        .catch((error) => {
          alert(error);
        });
    },
    goSignUp() {
      this.registerPage = true;
    },
    goLogin() {
      this.registerPage = false;
    },
  },
};
</script>
<style lang="sass" scoped>
.container
    font-family: 'Signika', sans-serif
    background: #F09819 
    background: -webkit-linear-gradient(to right, #F09819, #F09819)
    background: linear-gradient(to right, #F09819, #F09819)
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