<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { mdiHandBackLeft } from "@mdi/js";
</script>

<template>
  <v-app>
    <v-app-bar flat>
      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn text>Bouton Text</v-btn>

      <v-divider inset vertical></v-divider>

      <v-btn class="mr-8" color="primary" plain>
        <v-icon left :icon="mdiHandBackLeft"></v-icon>

        <span>Bouton avec Icon</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
