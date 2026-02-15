<template>
  <main class="main-container">
    <div class="home-container">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-text">
          <h1>Welcome to the Student Information LMS</h1>
          <p>
            Access and manage student records efficiently. Explore student profiles, courses, and academic years using our modern LMS interface.
          </p>
          <div class="hero-buttons">
            <router-link to="/students" class="btn-primary">View Students</router-link>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features">
        <div class="feature-card">
          <h3>Student Profiles</h3>
          <p>Quickly view student details, including course, year, and email.</p>
        </div>
        <div class="feature-card">
          <h3>API Integration</h3>
          <p>Data is fetched dynamically from an API for real-time information.</p>
        </div>
        <div class="feature-card">
          <h3>Easy Navigation</h3>
          <p>Navigate through student records and directories with a clean, intuitive layout.</p>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
/* Main container for consistent layout */
.main-container {
  background: #f3f4f6; /* light neutral background for the page */
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

/* Inner home content */
.home-container {
  max-width: 1100px;
  width: 100%;
  font-family: "Inter", sans-serif;
}

/* Hero Section */
.hero {
  background: #ffffff; /* white hero box */
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 50px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.hero-text h1 {
  font-size: 32px;
  color: #111827;
  margin-bottom: 15px;
}

.hero-text p {
  font-size: 16px;
  color: #4b5563;
  line-height: 1.5;
  margin-bottom: 20px;
}

.hero-buttons .btn-primary {
  padding: 10px 20px;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  background: #22c55e; /* green accent */
  color: white;
  transition: 0.2s;
}

.hero-buttons .btn-primary:hover {
  background: #16a34a;
}

/* Features Section */
.features {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-card {
  background: #ffffff;
  padding: 25px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  width: 250px;
  text-align: center;
  transition: all 0.2s ease;
}

.feature-card:hover {
  box-shadow: 0 6px 15px rgba(0,0,0,0.12);
  transform: translateY(-2px);
}

.feature-card h3 {
  font-size: 18px;
  color: #111827;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 14px;
  color: #4b5563;
}
</style>
