<template>
  <v-app>
    <v-app-bar app></v-app-bar>

    <v-navigation-drawer app></v-navigation-drawer>

    <v-main>
      <v-container fluid></v-container>
    </v-main>

    <v-footer app></v-footer>
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