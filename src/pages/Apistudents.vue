<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const students = ref([]);
const loading = ref(true);
const error = ref(null);
const selectedStudent = ref(null);

// Courses list
const courses = [
  "BS Computer Science",
  "BS Information Technology",
  "BS Computer Engineering",
  "BS Information Systems",
  "BS Software Engineering",
  "BS Data Science"
];

onMounted(async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users?limit=6");
    students.value = response.data.users.map((u, i) => ({
      id: u.id,
      name: `${u.firstName} ${u.lastName}`,
      email: u.email,
      avatar: u.image,
      year: (i % 4) + 1,
      course: courses[i]
    }));
  } catch (err) {
    error.value = "Failed to fetch students from API.";
  } finally {
    loading.value = false;
  }
});

// Modal
function viewDetails(student) {
  selectedStudent.value = student;
}
function closeModal() {
  selectedStudent.value = null;
}

// Helper for year label
const getYearLabel = (year) => {
  switch (year) {
    case 1: return "1st Year";
    case 2: return "2nd Year";
    case 3: return "3rd Year";
    case 4: return "4th Year";
    default: return `${year}th Year`;
  }
};
</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <h1>Students Directory</h1>
      <p>Data fetched from DummyJSON API</p>
    </div>

    <p v-if="loading" class="loading">Loading students...</p>
    <p v-if="error" class="error">{{ error }}</p>

    <table v-if="!loading && !error" class="students-table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Course</th>
          <th>Year</th>
          <th>Email</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>
            <img :src="student.avatar" alt="avatar" class="avatar"/>
          </td>
          <td>{{ student.name }}</td>
          <td>{{ student.course }}</td>
          <td>
            <span class="status">{{ getYearLabel(student.year) }}</span>
          </td>
          <td>{{ student.email }}</td>
          <td>
            <button class="btn" @click="viewDetails(student)">View</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div v-if="selectedStudent" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <img :src="selectedStudent.avatar" class="avatar-modal" alt="avatar"/>
        <h2>{{ selectedStudent.name }}</h2>
        <p><strong>Course:</strong> {{ selectedStudent.course }}</p>
        <p><strong>Year:</strong> {{ getYearLabel(selectedStudent.year) }}</p>
        <p><strong>Email:</strong> {{ selectedStudent.email }}</p>
        <button class="btn-close" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 30px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
}

.page-header {
  text-align: center;
  margin-bottom: 25px;
}

.page-header h1 {
  font-size: 32px;
  color: #111827;
}

.page-header p {
  font-size: 14px;
  color: #6b7280;
}

.loading {
  text-align: center;
  font-weight: 500;
  color: #22c55e;
}

.error {
  text-align: center;
  font-weight: bold;
  color: #ef4444;
}

.students-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.students-table th,
.students-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.students-table th {
  background: #ffffff; /* neutral white */
  color: #111827;      /* dark text */
  font-weight: 600;
  border-bottom: 2px solid #e5e7eb; /* subtle separation line */
}

.students-table tr:hover {
  background: #f9fafb;
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}

.status {
  display: inline-block;
  background: #f0fdf4;
  color: #166534;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 8px;
  text-align: center;
}

.btn {
  padding: 6px 12px;
  background: #22c55e;
  color: #fff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;
}

.btn:hover {
  background: #16a34a;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 25px 30px;
  border-radius: 14px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  position: relative;
}

.avatar-modal {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
}

.modal-content h2 {
  font-size: 22px;
  color: #111827;
  margin-bottom: 10px;
}

.modal-content p {
  font-size: 14px;
  color: #374151;
  margin: 6px 0;
}

.btn-close {
  margin-top: 15px;
  padding: 7px 16px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn-close:hover {
  background: #b91c1c;
}
</style>
