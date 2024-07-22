<template>
  <div>
    <RouterView v-slot="{ Component }">
      <transition mode="out-in" name="router">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped>
.router-enter-from,
.router-leave-to {
  opacity: 0;
}

.router-enter-active {
  transition: opacity 100ms ease-out;
}

.router-leave-active {
  transition: opacity 100ms ease-in;
}

.router-enter-to,
.router-leave-from {
  opacity: 1;
}
</style>
