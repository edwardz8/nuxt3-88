<script setup>
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()

</script>

<template>
  <div class="min-h-screen u-bg-black">
    <slot />

   <!--  <div class="fixed z-50 bottom-0 flex w-full h-[70px] border-t-gray-700">
      <div class="flex w-full max-w-[500px] mx-auto flex items-center justify-around">
         <button @click="navigateTo('/')" class="w-full h-full">
              <Icon name="mdi:home" size="25" color="#e8e8e8" />
          </button>
          <button @click="userStore.isMenuOverlay = true" class="w-full h-full">
              <Icon name="ph:user-bold" size="25" color="#e8e8e8" />
          </button>
      </div>
  </div> -->
  </div>
</template>