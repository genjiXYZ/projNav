<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
       flat
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

  -->
    <v-main>

      <transition name="router" mode="out-in">

        <router-view></router-view>

      </transition>
    

    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  
};
</script>
<style lang="css">
@import url("./style/font/piedra.css");

#app {
  transform-style: preserve-3d;
  background-color: #4c439b;
}
a {
  text-decoration: none;
}

.router-enter-active {
  animation: routeIn 0.5s none;
}
.router-leave-active {
  animation: routeOut 0.5s none;
}

@keyframes routeIn {
  from {
    opacity: 0;
    transform: translateY(-200px);
  }
  to {
    opacity: 1;
  }
}
@keyframes routeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(200px);
  }
}

.fade-enter-active {
  animation: leFadeInBottom 0.5s forwards;
}

.fade-leave-active {
  animation: leFadeOutBottom 0.5s forwards;
}

@keyframes leFadeInBottom {
  from {
    opacity: 0;
    transform: translateY(-200px);
  }
  to {
    opacity: 1;
  }
}
@keyframes leFadeOutBottom {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(200px);
  }
}
</style>


