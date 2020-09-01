<template>
  <v-app class="profile">
    <v-app-bar class="app-bar" app>
      <h1 class="brand-name">Kithub</h1>
      <div class="ml-auto" v-if="token">
        <span class="ml-auto white--text">{{email}}</span>
        <a @click="logOut()">
          <v-icon class="ml-5" color="#F09819">mdi-exit-run</v-icon>
        </a>
      </div>
      <div class="ml-auto" v-else>
        <router-link class="white--text text-decoration-none" tag="a" to="/login">login</router-link>
      </div>
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
    this.setUserInfo({ email: localEmail, token: localToken });
    this.email = localEmail;
    this.token = localToken;
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