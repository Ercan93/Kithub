<template>
  <v-app class="profile">
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
    <app-main :userToken="token" app></app-main>
    <app-footer app></app-footer>
  </v-app>
</template>
<script>
import appNavigation from "@/components/appNavigation";
import appFooter from "@/components/appFooter";
import appMain from "@/components/appMain";
import { mapActions } from "vuex";

export default {
  name: "UserProfile",
  components: { appNavigation, appFooter, appMain },
  data() {
    return {
      email: null,
      token: null,
    };
  },
  methods: {
    ...mapActions(["setUserInfo"]),
    logOut() {
      localStorage.removeItem("kithub-api-user-email");
      localStorage.removeItem("kithub-api-user-token");
      this.setUserInfo({ email: null, token: null });
      this.$router.push("/login");
    },
  },
  created() {
    let localToken = localStorage.getItem("kithub-api-user-token");
    let localEmail = localStorage.getItem("kithub-api-user-email");
    if (!localToken) {
      this.$router.push("/");
    } else {
      this.setUserInfo({ email: localEmail, token: localToken });
      this.email = localEmail;
      this.token = localToken;
    }
  },
};
</script>
<style lang="sass" scoped>
.profile
    font-family: 'Signika', sans-serif
    .app-bar
        background: #16222A
        background: -webkit-linear-gradient(to right, #3A6073, #16222A)
        background: linear-gradient(to right, #3A6073, #16222A)
    
    .brand-name
        color: #F09819

</style>