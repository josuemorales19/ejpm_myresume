<template>
  <v-app>
    <v-app-bar
      app
      color="teal darken-4"
      dark
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title><FONT FACE="Verdana">Resume and Achievements</FONT></v-toolbar-title>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list-item class="teal lighten-3">
        <v-list-item-content>
          <v-list-item-title class="text-h6"><FONT FACE="Verdana">Elvis Information</FONT></v-list-item-title>
          <v-list-item-subtitle>
            <FONT FACE="Verdana">Navigation</FONT> 
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item 
          v-for="(link, index) in links" 
          :key="index"
          link 
          @click="$router.push(link.path)"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container grid-list-xs>
      <router-view/>

      </v-container>
    </v-main>

    <v-footer padless class="teal darken-4 white--text">
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong><FONT FACE="Verdana">Elvis Josué Pérez Morales</FONT></strong>
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    links: [
      {
        name: 'Home',
        path: '/',
        icon: 'fa-home'
      },
      /* {
        name: 'About',
        path: '/About',
        icon: 'fa-info-circle'
      }, */
      {
        name: 'Resume',
        path: '/Resume',
        icon: 'fa-user-graduate'
      },
      {
        name: 'Achievements',
        path: '/Achievements',
        icon: 'fa-certificate'
      },
    ]
  }),
};
</script>
