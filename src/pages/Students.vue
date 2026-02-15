<script setup>
import StudentComponent from "../components/StudentComponent.vue";

// Filipino student profiles
const students = [
  {
    name: "Juan Dela Cruz",
    course: "BS Computer Science",
    year: 1,
    email: "juan.delacruz@example.com"
  },
  {
    name: "Maria Clara",
    course: "BS Information Technology",
    year: 2,
    email: "maria.clara@example.com"
  },
  {
    name: "Jose Rizal",
    course: "BS Computer Engineering",
    year: 3,
    email: "jose.rizal@example.com"
  },
  {
    name: "Andres Bonifacio",
    course: "BS Information Systems",
    year: 4,
    email: "andres.bonifacio@example.com"
  },
  {
    name: "Emilio Aguinaldo",
    course: "BS Software Engineering",
    year: 2,
    email: "emilio.aguinaldo@example.com"
  },
  {
    name: "Gabriela Silang",
    course: "BS Data Science",
    year: 1,
    email: "gabriela.silang@example.com"
  }
];
</script>

<template>
  <div>
    <div class="page-header">
      <h1>Student Directory</h1>
      <p>View and manage enrolled students</p>
    </div>

    <div class="grid">
      <StudentComponent
        v-for="student in students"
        :key="student.email"
        :name="student.name"
        :course="student.course"
        :year="student.year"
        :email="student.email"
      />
    </div>
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 28px;
  color: #111827;
}

.page-header p {
  color: #6b7280;
  font-size: 14px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
}
</style>
