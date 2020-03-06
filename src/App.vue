<template>
  <div id="app">
    <layout>
      <router-view />
    </layout>
  </div>
</template>

<script>
import Layout from "@/views/Layout/Layout";

export default {
  name: "App",
  components: { Layout },
  watch: {
    $route(to) {
      document.title =
        to.meta.title != undefined
          ? "Pastel de ideias - " + to.meta.title
          : "Pastel de ideias";
    }
  }
};
</script>

<style lang="scss">
#app {
  content: "";
}
</style>
