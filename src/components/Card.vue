<template>
  <div class="rounded-lg shadow max-w-lg bg-white">
    <div class="p-8">
      <div class="flex justify-between items-center">
        <div class="flex flex-col justify-between space-y-1">
          <div class="flex items-center space-x-4">
            <h3 class="text-lg overflow-ellipsis whitespace-nowrap overflow-x-hidden font-medium">{{title}}</h3>
            <span
              class="
                px-3
                py-[3px]
                text-sm
                font-medium
                tracking-wide
                text-green-800
                bg-green-100
                rounded-full
              "
              >{{tag}}</span
            >
          </div>
          <h4 class="text-gray-500 text-lg">{{subtitle}}</h4>
        </div>
        <img
          :src="image"
          class="rounded-full h-14 w-14 object-cover"
          alt="img"
        />
      </div>
    </div>
    <div class="flex">
      <button
        class="
          flex
          items-center
          justify-center
          w-1/2
          text-gray-800
          hover:bg-gray-100
          p-4
          border-t
          text-lg
          border-r border-gray-200
          focus:outline-none focus:ring focus:ring-gray-600
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-400 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
          />
          <path
            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
          /></svg
        >Email
      </button>
      <button
        class="
          flex
          items-center
          justify-center
          w-1/2
          text-gray-800
          hover:bg-gray-100
          p-4
          border-t
          text-lg
          border-gray-200
          focus:outline-none focus:ring focus:ring-gray-600
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-400 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
          />
        </svg>
        Call
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>
