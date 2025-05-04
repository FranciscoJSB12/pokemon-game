import { computed, onMounted, ref } from 'vue';
import { pokemonApi } from '../api/pokemon-api';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);

  const randomPokemon = computed(
    () => pokemonOptions.value[Math.floor(Math.random()) * pokemonOptions.value.length],
  );
  const isLoading = computed(() => pokemons.value.length === 0);

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    const pokemonList: Pokemon[] = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      return {
        id: +urlParts[urlParts.length - 2],
        name: pokemon.name,
      };
    });

    return pokemonList.sort(() => Math.random() - 0.5);
  };

  const getNextOptions = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  onMounted(async () => {
    await new Promise((r) => setTimeout(r, 1000));
    pokemons.value = await getPokemons();
    getNextOptions();
  });

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    randomPokemon,
    getNextOptions,
  };
};
