<template>
  <div class="page-container">
    <HeaderBar :items-in-cart="itemsInCart"/>
    <ShopList class="shop-list" @addToCart="onAddToCart" :shoppingTiles="shoppingTiles"/>
  </div>
  <ShoppingModal :open="showShoppingModal" @close="onShoppingModalClosed" :quantity="quantityAdded" :name="nameAdded"/>
</template>

<script setup lang="ts">
import HeaderBar from "@/components/HeaderBar.vue";
import ShopList from "./components/ShopList.vue";
import ShoppingModal from "./components/ShoppingModal.vue";
import {shoppingTiles} from "@/utils/types";
import {ref} from "vue";

const itemsInCart = ref(0);
const showShoppingModal = ref(false);
const quantityAdded = ref(0);
const nameAdded = ref("");

const onAddToCart = (name: string, count: number) => {
  quantityAdded.value = count;
  nameAdded.value = name;
  showShoppingModal.value = true;
}
const onShoppingModalClosed = (quantity: number) => {
  showShoppingModal.value = false;
  itemsInCart.value += quantity;
}

</script>