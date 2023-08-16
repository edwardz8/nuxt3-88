<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
</script>

<template>
  <AppContainer>
    <AppHeader />
    <PageContainer>
      <NuxtPage />
      <CreatePost
        :class="[
          {
            'max-h-[100vh] transition-all duration-200 ease-in visible':
              userStore.isMenuOverlay,
          },
          {
            'max-h-0 transition-all duration-200 ease-out invisible': !userStore.isMenuOverlay,
          },
        ]"
      />
    </PageContainer>
  </AppContainer>
</template>
