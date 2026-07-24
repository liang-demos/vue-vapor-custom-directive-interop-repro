<script setup lang="ts">
import { createCustomDirective } from './customDirective'
import VdomChild from './VdomChild.vue'

const vCustom = createCustomDirective('Vapor → VDOM')
</script>

<template vapor>
  <VdomChild v-custom />
</template>
