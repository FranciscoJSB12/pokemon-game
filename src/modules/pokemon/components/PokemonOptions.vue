<template>
  <section>
    <ul>
      <li v-for="i in 4"
        class="bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100">
        Pokemon {{ i }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
