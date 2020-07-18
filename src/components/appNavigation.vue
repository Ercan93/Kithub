<template>
  <v-navigation-drawer class="navigation" dark app>
    <v-list>
      <v-list-item-group class="mt-14" v-model="model">
        <v-list-item class="mt-6" v-for="(item, i) in items" :key="i">
          <v-list-item-content>
            <v-list-item-title>{{item}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    items: ["Book", "Categories books", "Author's book"],
    model: 1
  })
};
</script>
<style lang="sass" scoped>
.navigation
    background: #3A6073
    background: -webkit-linear-gradient(to top, #16222A, #3A6073)
    background: linear-gradient(to top, #16222A, #3A6073)
</style>