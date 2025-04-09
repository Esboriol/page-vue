<template>
  <div class="game-card">
    <img :src="game.image" :alt="game.title" class="game-image" />
    <div class="game-info">
      <h3>{{ game.title }}</h3>
      <p class="genre">{{ game.genre }}</p>
      <p class="platform">{{ game.platform }}</p>
      <router-link :to="`/game/${game.id}`" class="details-link">Detalhes</router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  game: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.game-card {
  background: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}

.game-card:hover {
  transform: translateY(-5px);
}

.game-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.game-info {
  padding: 1rem;
}

.genre {
  color: #42b883; /* Cor do Vue.js para destaque */
  font-weight: bold;
}

.details-link {
  display: inline-block;
  margin-top: 1rem;
  color: #fff;
  text-decoration: none;
  background: #42b883;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}
</style>
