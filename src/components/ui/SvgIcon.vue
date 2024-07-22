<template>
  <svg :height="props.height" :width="props.width" viewBox="0 0 1024 1024">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script setup>
import 'virtual:svg-icons-register';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
});
</script>