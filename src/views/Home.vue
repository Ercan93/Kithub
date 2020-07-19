<template>
  <div class="home">
    <v-main class="main d-flex align-center" app>
      <!-- 
      <section class="text-center">
        <h1 class="info">Kithub is still developing.</h1>
      </section>
      -->
      <h1 class="exp">Kithub is a Turkish books API service.</h1>
      <router-link to="/login" tag="button" class="router font-weight-bold">
        <h2>Login</h2>
      </router-link>
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home"
};
</script>
<style lang="sass" scoped>
.home
    font-family: 'Signika', sans-serif

    .main
        background: #480048
        height: 100vh
        color: white
        background: -webkit-linear-gradient(to right, #480048, #480048)
        background: linear-gradient(to right, #480048, #480048)
        .exp
            font-size: 60px
            letter-spacing: 0.3px

    .router
        text-decoration: none
        color: #F09819
        font-size: 20px
</style>