<template>
  <section v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col justify-center items-center h-screen w-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemon</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">¿Reconoces a este Pokémon?</h1>
    <div class="h-20">
      <button v-if="gameStatus !== GameStatus.Playing" @click="getNextOptions(4)"
        class="bg-blue-500 cursor-pointer text-white p-2 rounded-md">Jugar de
        nuevo</button>
      <h3 v-else class="m-5 capitalize font-extrabold">{{ gameStatus }}</h3>
    </div>

    <PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="gameStatus !== GameStatus.Playing" />

    <PokemonOptions :options="pokemonOptions" @selected-options="checkAnswer" :correct-answer="randomPokemon.id"
      :block-selection="gameStatus !== GameStatus.Playing" />
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const { isLoading, randomPokemon, gameStatus, pokemonOptions, checkAnswer, getNextOptions } = usePokemonGame();
</script>
