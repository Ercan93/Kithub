<template>
  <v-app>
    <v-app-bar class="app" app>
      <h1 class="brand-name">Kithub</h1>
      <v-btn class="ml-auto" color="#F09819">Profile</v-btn>
    </v-app-bar>

    <v-navigation-drawer class="navigation" app></v-navigation-drawer>

    <v-main class="main">
      <v-container fluid></v-container>
    </v-main>

    <v-footer class="footer justify-center white--text mb-0" app>
      <p class="mb-0">Ercan Uzunsakal 2020</p>
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
      this.email = localEmail;
      this.token = localToken;
    }
  }
};
</script>
<style lang="sass" scoped>

.app
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