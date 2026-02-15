<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<style>
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: #f9fafb; /* subtle gray background */
  color: #374151; /* dark text for readability */
}

.container {
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
