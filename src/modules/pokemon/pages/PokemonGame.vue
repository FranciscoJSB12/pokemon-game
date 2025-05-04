<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center h-screen w-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemon</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">¿Reconoces a este Pokémon?</h1>
    <h3>{{ randomPokemon }}</h3>
    <PokemonPicture />

    <PokemonOptions />
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import { usePokemonGame } from '../composables/usePokemonGame';

const { isLoading, randomPokemon } = usePokemonGame();
</script>
