<template>
  <v-app>
    <v-app-bar class="app-bar" app>
      <h1 class="brand-name">Kithub</h1>
      <span class="ml-auto white--text">{{email}}</span>
      <a @click="logOut()">
        <v-icon class="ml-5" color="#F09819">mdi-exit-run</v-icon>
      </a>
    </v-app-bar>
    <!--
    <app-navigation app></app-navigation>
    -->
    <app-main app></app-main>
    <app-footer app></app-footer>
  </v-app>
</template>
<script>
import appNavigation from "@/components/appNavigation";
import appFooter from "@/components/appFooter";
import appMain from "@/components/appMain";

export default {
  name: "UserProfile",
  components: { appNavigation, appFooter, appMain },
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
.app-bar
    background: #16222A
    background: -webkit-linear-gradient(to right, #3A6073, #16222A)
    background: linear-gradient(to right, #3A6073, #16222A)
    
    .brand-name
        color: #F09819

</style>