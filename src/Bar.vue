<template>
  <div>
    <button @click="a = !a">{{ a }}</button>
    <component :is="a ? 'div' : 'span'" v-dynamic-component> Hello </component>
  </div>
</template>

<script vapor>
import { ref } from 'vue';
import { vCustom as vDynamicComponent } from './directive.js';

const a = ref(false);
</script>
