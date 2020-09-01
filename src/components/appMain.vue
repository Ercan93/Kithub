<template>
  <v-main class="main">
    <div class="pl-16 pt-12 pr-16">
      <v-btn @click="showToken()">{{showTokenValue ? "Hide my token" : "Show my token"}}</v-btn>

      <v-alert dense class="mt-12" border="bottom" color="second" v-show="showTokenValue">
        <textarea disabled class="token-card">{{userToken}}</textarea>
      </v-alert>
      <v-alert
        dense
        class="mt-12"
        color="second"
      >Submit your token information in the body with the token variable.</v-alert>
    </div>
    <endpoint-card></endpoint-card>
  </v-main>
</template>
<script>
import endpointCard from "./endpointCard";
export default {
  components: { endpointCard },
  props: ["userToken"],
  data() {
    return {
      showTokenValue: false,
      token: null,
    };
  },
  methods: {
    showToken() {
      this.showTokenValue = !this.showTokenValue;
    },
  },
};
</script>

<style lang="sass" scoped>
.main
    background: #3A6073
    background: -webkit-linear-gradient(to top, #16222A, #3A6073)
    background: linear-gradient(to top, #16222A, #3A6073)
.token-card
    width: 100%
    height: 75px
</style>