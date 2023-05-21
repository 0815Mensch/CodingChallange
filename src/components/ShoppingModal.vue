<template>
  <!-- In this process I learned that the very simple animations I always used need TailwindCSS.-->
  <!-- I tried to make an animation in CSS but it took me longer than I had planned for this challange.-->
  <!-- I'll gladly learn how to do that in the future :) -->
    <TransitionRoot
    :show="open"
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <Dialog :initial-focus="okButton" @close="emit('close', quantity)">
      <div class="backdrop" aria-hidden="true"></div>
      <div class="modal-container">
        <DialogPanel class="dialog-panel">
          <div class="padding">
            <DialogTitle class="dialog-title">You are adding a controller!</DialogTitle>
            <hr>
            <p class="dialog-body">
              You are adding the {{ name }} {{ quantity }} time(s) to the cart.
            </p>
            <div class="btn-container">
              <button class="right-align primary-btn full-radius" ref="okButton" @click="emit('close', quantity)">OK</button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import {
    TransitionRoot,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'

  const okButton = ref(null);

  const emit = defineEmits(['close', 'closed']);

  defineProps({
    open: {type: Boolean, required: true},
    name: {type: String},
    quantity: {type: Number}
  });

</script>

<style scoped lang="scss">
$text-shadow: none;

.modal-container {
  position: fixed;
  inset: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.btn-container {
  justify-content: right;
  justify-items: right;
  width: 100%;
  display: flex;
}

.dialog-panel {
  background-color: white;
  width: 100%;
  max-width: 20rem;
  border-radius: 0.25rem;
}

.backdrop {
  position: fixed;
  inset: 0px;
  background-color: rgba($color: #000000, $alpha: 0.3);
}

.dialog-body {
  color: black;
  text-shadow: $text-shadow;
}
.dialog-title {
  color: red;
  text-shadow: $text-shadow;
  font-size: large;
}
</style>