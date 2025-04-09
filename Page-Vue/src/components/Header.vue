<template>
  <header>
    <h1>Meu Site com Vue</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/sobre">Sobre</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
header {
  background: #333;
  color: white;
  padding: 1rem;
}
</style>
