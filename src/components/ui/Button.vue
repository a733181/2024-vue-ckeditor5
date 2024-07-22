<template>
  <button
    :class="{ 'cursor-not-allowed': props.disabled }"
    :disabled="props.disabled"
    :type="props.type"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="postcss" scoped>
button[disabled] {
  @apply text-gray-400;
}
</style>
