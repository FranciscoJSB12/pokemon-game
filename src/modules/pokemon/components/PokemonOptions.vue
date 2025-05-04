<template>
  <section class="mt-5 flex flex-col">
    <button :disabled="blockSelection" v-for="{ name, id } in options" :key="id" @click="$emit('selectedOptions', id)"
      :class="['bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100 capitalize disabled:shadow-none disabled:bg-gray-100',
        {
          'disabled:bg-green-400 text-white': correctAnswer === id && blockSelection,
          'disabled:bg-red-100 opacity-70': correctAnswer !== id && blockSelection
        }]">
      {{ name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
  correctAnswer: number;
}

defineProps<Props>();

defineEmits<{
  selectedOptions: [id: number]
}>();
</script>
