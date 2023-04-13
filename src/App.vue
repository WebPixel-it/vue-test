<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item prepend-avatar="./vue-logo.png" title="Vue 3 Version"></v-list-item>

      <v-divider></v-divider>
      <div id="nav">
        <v-list density="compact" nav>
          <router-link to="/">
            <v-list-item prepend-icon="mdi-view-dashboard" title="Flight Booking"></v-list-item
          ></router-link>
          <router-link to="/barchart"
            ><v-list-item prepend-icon="mdi-forum" title="Bar Chart"></v-list-item
          ></router-link>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
        <div class="d-flex justify-center align-center h-100"></div>
      </template>

      <v-app-bar-title>Vue 3 Practice App</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: null
    }
  }
}
</script>
