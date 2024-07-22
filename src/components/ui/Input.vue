<template>
  <input
    v-model.trim="proxy"
    :class="className"
    :disabled="props.disabled"
    :type="props.type"
    :value="props.value"
    class="checkbox"
  />
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: [Number, String, Boolean],
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'checkbox',
  },
  value: {
    type: [Number, String, Boolean],
    default: null,
  },
});

const proxy = ref(props.modelValue);

const className = computed(() => {
  const className = [];
  if (props.disabled) {
    className.push('disabled');
  }

  return className.join(' ');
});

watch(proxy, (value) => {
  emit('update:modelValue', value);
});

watch(props, (value) => {
  if (value.modelValue !== proxy.value) {
    proxy.value = value.modelValue;
  }
});
</script>

<style lang="postcss" scoped>
:root {
  --top: 0;
  --left: 0;
}

.checkbox {
  @apply h-5 w-5 appearance-none rounded-full border border-blue-400;
}

.disabled {
  @apply cursor-not-allowed opacity-30;
}

.tick {
  @apply relative;
}

.tick:checked {
  @apply bg-blue-400;
}

.tick::before {
  content: url('data:image/svg+xml; utf8,<svg viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7826 0L6.66696 8.41177L2.21739 3.82353L0 6.11765L6.66696 13L17 2.29412L14.7826 0Z" fill="white"/></svg>');
  width: 12px;
  height: 12px;
  position: absolute;
  display: none;
  top: var(--top);
  left: var(--left);
}

.tick:checked::before {
  display: block;
}
</style>