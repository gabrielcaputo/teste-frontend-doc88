<template>
  <div class="menu-list" v-if="itemList.length">
    <div class="menu-wrap">
      <h2 class="animated fadeInUp">
        <span>Veja como será apresentado ao cliente</span>
      </h2>
      <template v-for="(item, index) in itemList">
        <MenuItem :item="item" :index="index" :key="index" />
      </template>
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/Home/MenuItem/MenuItem";

export default {
  name: "MenuList",
  components: {
    MenuItem
  },
  props: ["itemList"]
};
</script>

<style lang="scss" scoped>
@import "MenuList";
</style>
