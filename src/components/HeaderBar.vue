<template>
    <div id="header-container">
        <div>
            <span>
                Items in Cart:
            </span>
            <span>{{ itemsInCart }}</span>
        </div>
        <ShoppingCartIcon class="icon"/>
    </div>    
</template>

<style scoped lang="scss">
$bgcolor: #ff000088;

#header-container {
    text-align: right;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    background-color: $bgcolor;
    width: 100%;
    height: 1.75rem;
}

#header-container > * {
    margin-left: 5px;
}


.icon {
    height: 1.5rem;
    width: 1.5rem;
}
</style>

<script setup lang="ts">
import {ShoppingCartIcon} from "@heroicons/vue/24/outline";

defineProps({
    itemsInCart: {type: Number, required: true},
})

</script>