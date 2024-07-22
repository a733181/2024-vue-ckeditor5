<template>
  <div :style="{ 'z-index': +props.zIndex }" class="vue-m fixed bottom-0 left-0 right-0 top-0">
    <div class="fixed bottom-0 left-0 right-0 top-0 bg-black/60" @click="closeHandler"></div>
    <div :style="{ 'z-index': +props.zIndex + 1 }">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close']);

const props = defineProps({
  zIndex: {
    type: [Number, String],
    default: 10,
  },
  placement: {
    type: String,
    default: 'center',
  },
});

function closeHandler() {
  emit('close');
}
</script>
