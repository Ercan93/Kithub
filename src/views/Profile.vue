<template>
  <v-app>
    <v-app-bar class="app-bar" app>
      <h1 class="brand-name">Kithub</h1>
      <span class="ml-auto orange--text" color="#F09819">{{email}}</span>
      <a>
        <v-icon class="ml-5" color="#F09819">mdi-exit-run</v-icon>
      </a>
    </v-app-bar>

    <v-navigation-drawer class="navigation" app></v-navigation-drawer>

    <v-main class="main">
      <v-container fluid></v-container>
    </v-main>

    <v-footer class="footer justify-center white--text mb-0" app>
      <a href="https://github.com/Ercan93" target="_blank">
        <v-icon color="grey">mdi-github</v-icon>
      </a>

      <p class="mb-0 ml-auto">
        <v-icon>mdi-vuejs</v-icon>
        <v-icon>mdi-webpack</v-icon>
        <v-icon>mdi-language-javascript</v-icon>
        <v-icon>mdi-api</v-icon>
        <v-icon>mdi-sass</v-icon>
        <v-icon>mdi-stack-overflow</v-icon>
      </p>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: "UserProfile",
  data() {
    return {
      email: null,
      token: null
    };
  },
  created() {
    let localToken = localStorage.getItem("kithub-api-user-token");
    let localEmail = localStorage.getItem("kithub-api-user-email");
    if (!localToken) {
      this.$router.push("/");
    } else {
      this.$store.state.userInfo.email = localEmail;
      this.$store.state.userInfo.token = localToken;
      this.email = localEmail;
      this.token = localToken;
    }
  }
};
</script>
<style lang="sass" scoped>

.app-bar
    background: #16222A
    background: -webkit-linear-gradient(to right, #3A6073, #16222A)
    background: linear-gradient(to right, #3A6073, #16222A)

.navigation
    background: #3A6073
    background: -webkit-linear-gradient(to top, #16222A, #3A6073)
    background: linear-gradient(to top, #16222A, #3A6073)
.main
    background: #3A6073
    background: -webkit-linear-gradient(to top, #16222A, #3A6073)
    background: linear-gradient(to top, #16222A, #3A6073)

.footer
    background: #F09819
    background: -webkit-linear-gradient(to right, #480048, #F09819)
    background: linear-gradient(to right, #480048, #F09819)
.brand-name
    color: #F09819
</style>