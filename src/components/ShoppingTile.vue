<template>
    <div class="tile-container">
            <div class="image-area-container">
                <span class="text-overlay title title-overlay">
                    {{ shoppingTile.name }}
                </span>
                <div class="image-container">
                    <img :src="imgPathPrefix + shoppingTile.imgPath" alt="Nice image of a controller"/>
                </div>
                <span v-if="shoppingTile.specialPrice" class="text-overlay badge">Special Offer!</span>
            </div>
            <span class="title">
                {{ shoppingTile.title }}
            </span>
            <p class="main-text">
                {{ shoppingTile.description }}
            </p>
        <div class="tile-footer">
            <NumberSpinner @number-changed="onNumberChanged"/>
            <button @click="emit('addToCart', shoppingTile.title, quantity)" class="primary-btn text-center full-radius">Add to Cart</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ShoppingTileType } from '@/utils/types';
import type {PropType} from "vue";
import {ref} from "vue";
import NumberSpinner from "@/components/NumberSpinner.vue";


const imgPathPrefix = ref("/src/img/");
const quantity = ref(1);

defineProps({
    shoppingTile: {type: Object as PropType<ShoppingTileType>, required: true},
})

const emit = defineEmits(["addToCart"]);

const onNumberChanged = (newQuantity: number) => {
    quantity.value = newQuantity;
}

</script>

<style scoped lang="scss">
$width: 90%;
$side-top-padding: 5px 5% 0 5%;
$bottom-distance: 10px;


.title {
    padding: $side-top-padding;
}

.main-text {
    margin-bottom: 50px;
    width: $width;
    padding: $side-top-padding;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    text-overflow: ellipsis;
    overflow: hidden;
}

.tile-container {
    box-shadow: 15px 20px 15px rgba(129, 43, 43, 0.664);
    position: relative;
    display: flex;
    flex-direction: column;
}

.image-area-container {
    padding: 5px;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    position: relative;
    max-height: 50%;
    max-width: 100%;
    width: auto;
}


.image-container {
    display: flex;
    width: auto;
    max-height: 100%;
    aspect-ratio: 16/9;
}

.text-overlay {
    padding: 2px;
    border-radius: 10px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    z-index: 2;
}

.title-overlay {
    padding: 5px;
    height: 10%;
    width: 80%;
    top: 3%;
    left: 10%;
    background-color: rgba(255, 0, 0, 0.5);
}

.badge {
    padding: 5px;
    height: 7%;
    bottom: 5%;
    right: 5%;
    background-color: rgba(103, 255, 192, 0.493);
}

.tile-footer {
    padding: $side-top-padding;
    display: flex;
    position: absolute;
    bottom: $bottom-distance;
    justify-content: space-between;
    width: $width;
}

// @media screen and (min-width: 720px){
//     .main-text {
//         -webkit-box-orient: vertical;
//         -webkit-line-clamp: 9;
//         text-overflow: ellipsis;
//         overflow: hidden;
//     }
// }
@media screen and (min-width: 720px){
    .main-text {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}
@media screen and (min-width: 900px){
    .main-text {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 7;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}

</style>