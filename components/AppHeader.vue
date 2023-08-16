<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const client = useSupabaseClient()
const user = useSupabaseUser()

console.log(user.value, 'user value')

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/')
}
</script>

<template>
  <div>
    <Title>Nuxt3xSupabase</Title>
    <div class="flex items-center md:justify-between justify-center">
      <Icon name="material-symbols:sports-outline" size="25" color="#e8e8e8" />
      <button @click="userStore.isMenuOverlay = true" class="w-full h-full">
        <Icon name="ri:edit-box-line" size="25" color="#e8e8e8" />
    </button>
      <div class="flex items-center">
        <UButton
          v-if="user"
          class="u-text-white"
          variant="transparent"
          @click="logout"
        >
          Logout
        </UButton>
      </div>
    </div>
  </div>
</template>