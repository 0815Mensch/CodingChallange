<template>
    <div class="spinner-container">
        <!-- not of type number to not have the number spinner of html -->
        <button class="left-radius text-center" @click="minusOne" :class="disableMinusBtn ? 'greyed-btn': 'primary-btn'" :disabled="disableMinusBtn"> 
            <MinusIcon/>    
        </button>
        <input :value="inputValue" name="input-field" type="text" readonly/>
        <button class="right-radius text-center" @click="plusOne" :class="disablePlusBtn ? 'greyed-btn': 'primary-btn'" :disabled="disablePlusBtn"> 
            <PlusIcon/>    
        </button>
    </div>
</template>

<style scoped>
.spinner-container {
    align-items: center;
    justify-content: start;
    display: flex;
}
label {
    display: block;
}
input {
    height: 26px;
    width: 25%;
    padding: 0;
    text-align: center;
}
button {
    height: 30px;
    width: 30px;
    padding: 0;
}
</style>

<script setup lang="ts">
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/outline";
import {ref, computed} from "vue";

const inputValue = ref(1);
const minValue = ref(1);
const maxValue = ref(5);

const disableMinusBtn = computed(() => {
    return inputValue.value == minValue.value;
});
const disablePlusBtn = computed(() => {
    return inputValue.value == maxValue.value;
})

const minusOne = () => {
    --inputValue.value;
    emit("numberChanged", inputValue.value);
}

const plusOne = () => {
    ++inputValue.value;
    emit("numberChanged", inputValue.value);
}

const emit = defineEmits(["numberChanged"]);

</script>