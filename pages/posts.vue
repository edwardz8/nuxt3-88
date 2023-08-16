<script setup>
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
const user = useSupabaseUser();

let posts = ref([]);
let isPosts = ref(false);
let isLoading = ref(false);

watchEffect(() => {
  if (!user.value) {
    return navigateTo("/");
  }
});

onBeforeMount(async () => {
  try {
    isLoading.value = true;
    await userStore.getAllPosts();
    isLoading.value = true;
  } catch (error) {
    console.log(error);
  }
});

onMounted(() => {
  watchEffect(() => {
    if (userStore.posts && userStore.posts.length >= 1) {
      posts.value = userStore.posts;
      isPosts.value = true;
    }
  });
});

watch(
  () => posts.value,
  () => {
    if (userStore.posts && userStore.posts.length >= 1) {
      posts.value = userStore.posts;
      isPosts.value = true;
    }
  },
  { deep: true }
);
</script>

<template>
  <div class="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <div class="mx-auto mt-2" v-if="isPosts" v-for="post in posts" :key="post">
          <Post :post="post" @isDeleted="posts = userStore.getAllPosts()" />
        </div>
        <div v-else>
          <client-only>
            <div
              v-if="isLoading"
              class="mt-20 w-full flex items-center justify-center mx-auto"
            >
              <div class="text-white mx-auto flex flex-wrap items-center justify-center">
                <Icon name="eos-icons:bubble-loading" size="50" color="#ffffff" />
                <div class="w-full mt-1">Loading...</div>
              </div>
            </div>
            <div
              v-if="!isLoading"
              class="mt-20 w-full flex items-center justify-center mx-auto"
            >
              <div class="text-white mx-auto flex flex-col items-center justify-center">
                <Icon name="tabler:mood-empty" size="50" color="#ffffff" />
                <div class="w-full">Make the first post!</div>
              </div>
            </div>
          </client-only>
        </div>
        <div class="mt-60" />
      </div>
</template>
