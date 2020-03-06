<template>
  <div class="home">
    <MenuForm
      @onChangeMenuType="onChangeMenuType"
      @onReceiveNewMenuItem="onReceiveNewMenuItem"
    />
    <MenuList
      :itemList="menuType == 'food' ? this.foodList : this.beverageList"
    />
  </div>
</template>

<script>
import MenuForm from "@/components/Home/MenuForm/MenuForm";
import MenuList from "@/components/Home/MenuList/MenuList";

export default {
  name: "Home",
  components: {
    MenuForm,
    MenuList
  },
  data() {
    return {
      menuType: "food",
      foodList: [],
      beverageList: []
    };
  },
  methods: {
    onChangeMenuType(value) {
      this.menuType = value;
    },
    onReceiveNewMenuItem(item) {
      if (this.menuType === "food") {
        this.foodList.push(item);
      } else {
        this.beverageList.push(item);
      }

      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      }, 10);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "Home";
</style>
