<template>
  <div id="app" class="app-container">
    <!-- Header Personalizado -->
    <header class="app-header">
      <img 
        src="@/assets/logo.svg" 
        alt="Logo do Meu App" 
        class="logo"
      >
      <h1 class="app-title">Bem-vindo ao Portal de Jogos!</h1>
    </header>

    <!-- Conteúdo Dinâmico -->
    <main class="app-content">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <p>© 2024 Portal de Jogos - Desenvolvido com Vue.js</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* Estilos Modernos */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.app-header {
  padding: 2rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.logo {
  height: 120px;
  margin-bottom: 1rem;
  transition: transform 0.3s;
}

.logo:hover {
  transform: rotate(5deg) scale(1.05);
}

.app-title {
  color: #42b883;
  font-size: 2.5rem;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.app-content {
  flex: 1;
  padding: 2rem;
}

.app-footer {
  padding: 1.5rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  color: #ccc;
}
</style>