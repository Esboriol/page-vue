<template>
  <div class="home">
    <header class="header">
      <h1>Portal de Jogos</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">Sobre</router-link>
      </nav>
    </header>

    <div class="game-grid">
      <GameCard v-for="game in games" :key="game.id" :game="game" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import GameCard from '@/components/GameCard.vue';
import { games } from '@/data/games';

export default {
  components: { GameCard },
  setup() {
    const gamesList = ref(games);

    return { games: gamesList };
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}
</style>
