<template>
  <v-app>
    <v-app-bar class="app-bar" app>
      <h1 class="brand-name">Kithub</h1>
      <span class="ml-auto orange--text" color="#F09819">{{email}}</span>
      <a @click="logOut()">
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
  methods: {
    logOut() {
      localStorage.removeItem("kithub-api-user-email");
      localStorage.removeItem("kithub-api-user-email");
      this.$store.state.userInfo = { email: null, token: null };
      this.$router.push("/login");
    }
  },
  created() {
    let localToken = localStorage.getItem("kithub-api-user-token");
    let localEmail = localStorage.getItem("kithub-api-user-email");
    if (!localToken && !localEmail) {
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
$kithub-dark:#16222A
$kithub-blue:#3A6073
$kithub-orange: #F09819
$kithub-purple: #480048

.app-bar
    background: $kithub-dark
    background: -webkit-linear-gradient(to right, $kithub-blue, $kithub-dark)
    background: linear-gradient(to right, $kithub-blue, $kithub-dark)

.main,.navigation
    background: $kithub-blue
    background: -webkit-linear-gradient(to top, $kithub-dark, $kithub-blue)
    background: linear-gradient(to top, $kithub-dark, $kithub-blue)

.footer
    background: $kithub-orange
    background: -webkit-linear-gradient(to right, $kithub-purple, $kithub-orange)
    background: linear-gradient(to right, $kithub-purple, $kithub-orange)
.brand-name
    color: $kithub-orange
</style>