<script setup>
import VdomComponent from './VdomComponent.vue'

const vCustom = element => {
  console.log(element)
  element.setAttribute('data-custom', '')
}
</script>

<template vapor>
  <VdomComponent v-custom />
</template>
