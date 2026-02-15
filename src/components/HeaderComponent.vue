<template>
  <header class="header">
    <h2>Student Info LMS</h2>
    <nav>
  <router-link to="/">Home</router-link>
  <router-link to="/students">Students</router-link>
  <router-link to="/api-students">API Students</router-link>
</nav>

  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 30px;
  background: #ffffff;
  color: #111827;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

nav a {
  color: #6b7280; /* neutral gray */
  margin-left: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: 0.2s;
}

nav a.router-link-active {
  color: #22c55e; /* soft green accent for active link */
  font-weight: 600;
}

nav a:hover {
  color: #16a34a;
}
</style>
