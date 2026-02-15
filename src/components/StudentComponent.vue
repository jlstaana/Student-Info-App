<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  name: String,
  course: String,
  year: Number,
  email: String
});

const showDetails = ref(false);

function toggleDetails() {
  showDetails.value = !showDetails.value;
}

const avatarUrl = `https://ui-avatars.com/api/?name=${props.name}&background=22c55e&color=ffffff`;

const yearLabel = computed(() => {
  switch (props.year) {
    case 1: return "1st Year";
    case 2: return "2nd Year";
    case 3: return "3rd Year";
    case 4: return "4th Year";
    default: return `${props.year}th Year`;
  }
});
</script>

<template>
  <div class="student-card">
    <div class="card-header">
      <img :src="avatarUrl" alt="avatar" class="avatar" />
      <div>
        <h3>{{ name }}</h3>
        <span class="status">{{ yearLabel }}</span>
      </div>
    </div>

    <button class="btn" @click="toggleDetails">
      {{ showDetails ? "Hide Details" : "View Details" }}
    </button>

    <div v-if="showDetails" class="details-panel">
      <div class="detail-row">
        <span class="icon">🎓</span>
        <span><strong>Course:</strong> {{ course }}</span>
      </div>
      <div class="detail-row">
        <span class="icon">📚</span>
        <span><strong>Year:</strong> {{ yearLabel }}</span>
      </div>
      <div class="detail-row">
        <span class="icon">✉️</span>
        <span><strong>Email:</strong> {{ email }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.student-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
}

.student-card:hover {
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.avatar {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}

.status {
  display: inline-block;
  margin-top: 4px;
  background: #f0fdf4;
  color: #166534;
  padding: 3px 8px;
  font-size: 12px;
  border-radius: 8px;
}

.btn {
  margin-top: 10px;
  padding: 7px 14px;
  background: #22c55e;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;
}

.btn:hover {
  background: #16a34a;
}

.details-panel {
  margin-top: 12px;
  padding: 12px;
  border-radius: 10px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  animation: fadeIn 0.25s ease-in-out;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #374151;
}

.detail-row:last-child {
  margin-bottom: 0;
}

.icon {
  display: inline-block;
  width: 24px;
  text-align: center;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
