<template>
  <VSelect :calculate-position="withPopper">
    <template v-slot:no-options="{ search, searching }">
      <template v-if="searching">
        找不到 <em>{{ search }}</em
        >.
      </template>
      <p v-else></p>
    </template>
  </VSelect>
</template>
<script setup>
import { ref } from 'vue';
import VSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import { createPopper } from '@popperjs/core';

const props = defineProps({
  placement: {
    type: String,
    default: 'bottom',
  },
});

// 計算位址預設 top
const placement = ref(props.placement);

// 計算位置
function withPopper(dropdownList, component, { width }) {
  dropdownList.style.width = width;

  const popper = createPopper(component.$refs.toggle, dropdownList, {
    placement: placement.value,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, -1],
        },
      },
      {
        name: 'toggleClass',
        enabled: true,
        phase: 'write',
        fn({ state }) {
          component.$el.classList.toggle('drop-up', state.placement === 'top');
        },
      },
    ],
  });
  return () => popper.destroy();
}
</script>

<style>
:root {
  --vs-selected-color: #ddd;
  --vs-controls-color: #ddd;
  --vs-dropdown-option--selected-bg: #ddd;
  --vs-dropdown-option--selected-color: var(--vs-selected-color);
}

.vs__dropdown-toggle {
  border: none;
}

/* select */
.vs__dropdown-option--selected:not(.vs__dropdown-option--highlight) {
  background: var(--vs-dropdown-option--selected-bg);
  color: var(--vs-dropdown-option--selected-color);
}

[data-popper-placement='top'] {
  border-radius: 4px 4px 0 0;
  border-top-style: solid;
  border-bottom-style: none;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.15);
}
</style>