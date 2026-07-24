<script setup lang="ts">
import { createCustomDirective } from './customDirective'
import VaporChild from './VaporChild.vue'

const vCustom = createCustomDirective('Vapor → Vapor')
</script>

<template vapor>
  <VaporChild v-custom />
</template>
