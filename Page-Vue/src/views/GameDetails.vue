
<template>
    <div class="game-details-container">
      <div v-if="game" class="game-details">
        <!-- Botão para voltar -->
        <router-link to="/" class="back-button">← Voltar</router-link>
  
        <!-- Título e imagem -->
        <h1 class="game-title">{{ game.title }}</h1>
        <img :src="game.image" :alt="game.title" class="game-banner" />
  
        <!-- Descrição -->
        <div class="description-section">
          <h2>Sobre o Jogo</h2>
          <p class="game-description">{{ game.description }}</p>
        </div>
  
        <!-- Metadados -->
        <div class="meta-info">
          <div class="meta-item">
            <span class="meta-label">Gênero:</span>
            <span class="meta-value">{{ game.genre }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Plataformas:</span>
            <span class="meta-value">{{ game.platform }}</span>
          </div>
        </div>
      </div>
      <div v-else class="loading">
        <p>Jogo não encontrado... 😢</p>
      </div>
    </div>
  </template>
  
  <script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { games } from '@/data/games';

export default {
  setup() {
    const route = useRoute();
    const game = ref(null);

    onMounted(() => {
      game.value = games.find(g => g.id === parseInt(route.params.id));
    });

    return { game };
  }
}
</script>
  
  <style scoped>
  .game-details-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
    background: #1a1a1a;
    border-radius: 10px;
  }
  
  .game-banner {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    margin: 1rem 0;
  }
  
  .game-title {
    color: #42b883;
    margin-bottom: 1rem;
  }
  
  .description-section {
    margin: 2rem 0;
    padding: 1rem;
    background: #2a2a2a;
    border-radius: 8px;
  }
  
  .game-description {
    line-height: 1.6;
    color: #ccc;
  }
  
  .meta-info {
    display: grid;
    gap: 1rem;
    padding: 1rem;
    background: #2a2a2a;
    border-radius: 8px;
  }
  
  .meta-item {
    display: flex;
    gap: 0.5rem;
  }
  
  .meta-label {
    font-weight: bold;
    color: #42b883;
  }
  
  .back-button {
    display: inline-block;
    margin-bottom: 1rem;
    color: #42b883;
    text-decoration: none;
  }
  
  .back-button:hover {
    text-decoration: underline;
  }
  
  .loading {
    text-align: center;
    padding: 2rem;
  }
  </style>