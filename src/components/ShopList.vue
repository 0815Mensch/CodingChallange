<template>
    <div class="shopping-tile-container">
        <ShoppingTile :key="tile.id" class="shopping-tile" @addToCart="(name: string, quantity: number) => {emit('addToCart', name, quantity)}" v-for="tile in shoppingTiles" :shoppingTile="tile"/>
    </div>
</template>

<script setup lang="ts">
import ShoppingTile from "@/components/ShoppingTile.vue";
import type {ShoppingTileType} from "@/utils/types";
import type {PropType} from "vue";

defineProps({
    shoppingTiles: {required: true, type: Object as PropType<ShoppingTileType[]>}
})

const emit = defineEmits(['addToCart']);
</script>

<style scoped>

.shopping-tile-container {
    display: flex;
    flex-direction: column;
    height: 35rem;
}

.shopping-tile {
    background-color: #adadad;
    margin: 2.5%;
    width: 95%;
    height: 100%;
}

@media screen and (min-width: 770px){
    .shopping-tile-container {
        flex-direction: row;
    }
    .shopping-tile {
        width: 45%;
    }
}
</style>