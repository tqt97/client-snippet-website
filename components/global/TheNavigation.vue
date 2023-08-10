<template>
  <div class="bg-white py-4 lg:py-0 flex items-center">
    <div class="container flex flex-wrap items-center lg:flex-nowrap">
      <nuxt-link :to="{ name: 'index' }" class="mr-10 flex-shrink-0">
        <NuxtLogo class="h-8" />
      </nuxt-link>
      <a
        href="#"
        class="lg:hidden ml-auto flex flex-col relative justify-center w-8 h-8"
        @click="mobileNavOpen = !mobileNavOpen"
      >
        <span
          class="bg-blue-500 h-1 w-8 rounded mb-1 transition-all duration-150"
          :class="{ 'rotate-45 absolute right-0': mobileNavOpen }"
        ></span>
        <span
          class="bg-blue-500 h-1 w-8 rounded mb-1 transition-all duration-150"
          :class="{ '-rotate-45 absolute right-0': mobileNavOpen }"
        ></span>
        <span
          class="bg-blue-500 h-1 w-8 rounded mb-1 transition-all duration-150"
          :class="{ 'hidden': mobileNavOpen }"
        ></span>
      </a>

      <div
        class="w-full flex"
        :class="{ 'mt-4': mobileNavOpen, 'hidden lg:flex': !mobileNavOpen }"
      >
        <ul class="lg:h-24 lg:flex w-full lg:w-auto items-center">
          <li>
            <nuxt-link
              :to="{ name: 'index' }"
              class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >Browse</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'index' }"
              class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >Search</nuxt-link
            >
          </li>
        </ul>
        <ul
          class="lg:h-24 lg:flex items-center ml-auto text-right w-full lg:w-auto"
        >
          <li>
            <nuxt-link
              :to="{ name: 'index' }"
              class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >Dashboard</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'index' }"
              class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >Auth</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NuxtLogo from "@/components/NuxtLogo.vue";

export default {
  components: {
    NuxtLogo,
  },
  data() {
    return {
      mobileNavOpen: false,
    };
  },
};
</script>
