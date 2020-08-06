<template>
  <v-app class="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  created() {
    axios.get("https://kithub-books.herokuapp.com").then((response) => {
      console.log("api server is awakened.");
    });
  },
};
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap')
</style>