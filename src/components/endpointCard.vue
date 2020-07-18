<template>
  <v-container class="d-flex flex-column white--text" fluid>
    <div class="mb-16" v-for="endpoint in bookApiInfo">
      <h2>
        <a :href="`#${endpoint.title}`">{{endpoint.title}}</a>
      </h2>
      <p>{{endpoint.description}}</p>
      <p class="code">{{endpoint.code}}</p>
      <v-alert
        class="mt-8"
        dense
        border="left"
        type="info"
        color="#DD5919"
        v-if="endpoint.alert== 'bookName' "
      >
        If the book title consists of
        <strong>more</strong> than one word, separate the words with
        <strong>_</strong> .
      </v-alert>
      <h3 class="mt-16 mb-4">
        <i>Example Query</i>
      </h3>
      <p class="code">{{endpoint.exampleQuery}}</p>
      <h3 class="mt-6">
        <i>Example Result</i>
      </h3>
      <div class="mt-2 result pa-10">{{endpoint.exampleResult}}</div>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return { bookApiInfo: null };
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