<template>
  <div class="menu-item animated fadeInUp">
    <div
      class="menu-item-image"
      v-bind:style="{
        'background-image':
          'url(' +
          (item.imageData
            ? item.imageData
            : require('@/assets/images/default-menu.png')) 
          +')'
      }"
    ></div>
    <div class="menu-item-box">
      <div class="menu-item-header">
        <div class="menu-item-title">"{{ item.title }}"</div>
        <div class="menu-item-price">
          <money
            id="price"
            v-bind="money"
            placeholder="R$ 0,00"
            v-model="item.price"
            disabled
            required
          ></money>
        </div>
      </div>
      <div class="menu-item-content">
        <div class="menu-item-flavor">
          <strong>Sabor:</strong> {{ item.flavor }}
        </div>
        <div class="menu-item-description" v-if="item.description">
          <strong>Descrição:</strong> {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Money } from "v-money";

export default {
  name: "MenuItem",
  props: ["item", "index"],
  components: { Money },
  data() {
    return {
      price: 500,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        precision: 2,
        masked: false
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "MenuItem";
</style>
