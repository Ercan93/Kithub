<template>
  <v-main class="main pr-16 ml-16">
    <endpoint-card></endpoint-card>
  </v-main>
</template>
<script>
import endpointCard from "./endpointCard";
export default {
  components: { endpointCard }
};
</script>

<style lang="sass" scoped>
.main
    background: #3A6073
    background: -webkit-linear-gradient(to top, #16222A, #3A6073)
    background: linear-gradient(to top, #16222A, #3A6073)

</style>