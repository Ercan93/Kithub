<template>
  <v-container class="d-flex flex-column pa-16 white--text" fluid>
    <div class="mb-16 mt-6 pb-16" v-for="endpoint in bookApiInfo">
      <h1>
        <a :href="`#${endpoint.title}`">{{endpoint.title}}</a>
      </h1>
      <p>{{endpoint.description}}</p>
      <p class="code">{{endpoint.code}}</p>
      <v-alert
        class="mt-6"
        dense
        border="left"
        type="info"
        color="#DD5919"
        v-if="endpoint.alert"
      >{{endpoint.alert}}</v-alert>
      <v-alert
        class="mt-6"
        dense
        border="left"
        type="info"
        color="#DD3919"
        v-if="endpoint.alert2"
      >{{endpoint.alert2}}</v-alert>
      <v-alert
        border="left"
        type="info"
        icon="mdi-content-save-alert"
        prominent
        class="pa-5 mt-6 d-flex justify-start"
        v-if="endpoint.paramsDescription"
      >
        <div class="d-flex align-center" v-for="param in endpoint.paramsDescription">
          <strong>
            <h2>{{param.paramTitle}} :</h2>
          </strong>
          <h4 class="pl-6" v-for="value in param.values">{{value}}</h4>
        </div>
      </v-alert>
      <h3 class="mt-8 mb-4">
        <i>Example Query</i>
      </h3>
      <p class="code">{{endpoint.exampleQuery}}</p>
      <!--
      <h3 class="mt-6">
        <i>Example Result</i>
      </h3>
      -->
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      bookApiInfo: null
    };
  },
  created() {
    this.bookApiInfo = this.$store.state.bookApiInfo;
  }
};
</script>
<style lang="sass" scoped>
.code
    font-size: 20px
    padding: 20px 10px
    letter-spacing: 1px
    line-height: 20px
    border-radius: 10px
    width: auto
    background: #F09819
    background: -webkit-linear-gradient(to right, #480048, #F09819)
    background: linear-gradient(to right, #480048, #F09819)
    .result
        line-height: 28px
a
    text-decoration: none
    color: #F09819
.result
    background-color: #480048
    border-radius: 10px

</style>