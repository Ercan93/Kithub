<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row class="header" align="center" justify="center">
          <h1>Kithub API Service</h1>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="dark" dark flat>
                <v-spacer></v-spacer>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="E-mail" name="login" prepend-icon="mdi-account" type="text"></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="pa-5" color="black" dark>Log in</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="flex flex-column" align="center" justify="center">
          <span>Don't have an account?</span>
          <v-btn class="pa-5 mt-4" color="success" dark>Sign up for Kithub</v-btn>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<style lang="sass" scoped>
.header
    padding-bottom: 20px
    border-bottom: solid 1px darkgrey


</style>