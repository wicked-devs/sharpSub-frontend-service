<template>
  <transition name="fade">
    <div v-if="visible" class="toast" :class="typeClass">
      <div class="toast-icon">
        <font-awesome-icon :icon="icon" />
      </div>
      <div class="toast-content">
        <strong>{{ title }}</strong>
        <p>{{ description }}</p>
      </div>
      <div class="toast-close" @click="closeToast">
        <font-awesome-icon icon="times" />
      </div>
      <div class="toast-timer" :style="{ width: timerWidth + '%' }"></div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faExclamationCircle,
  faTimesCircle,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCheckCircle,
  faExclamationCircle,
  faTimesCircle,
  faInfoCircle,
  faTimes
);

const props = defineProps({
  type: {
    type: String,
    default: "info",
    validator: (value) =>
      ["success", "error", "warning", "info"].includes(value),
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timer: {
    type: Number,
    default: 2000,
  },
});

const visible = ref(true);
const timerWidth = ref(100);
let timerInterval;

const typeClass = computed(() => {
  return `toast--${props.type}`;
});

const icon = computed(() => {
  switch (props.type) {
    case "success":
      return "check-circle";
    case "error":
      return "times-circle";
    case "warning":
      return "exclamation-circle";
    case "info":
    default:
      return "info-circle";
  }
});

const startTimer = () => {
  const startTime = Date.now();
  const endTime = startTime + props.timer;

  timerInterval = setInterval(() => {
    const currentTime = Date.now();
    const remainingTime = endTime - currentTime;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      timerWidth.value = 0;
      visible.value = false;
    } else {
      timerWidth.value = (remainingTime / props.timer) * 100;
    }
  }, 100);
};

const closeToast = () => {
  visible.value = false;
};

onMounted(startTimer);
onBeforeUnmount(() => clearInterval(timerInterval));
</script>

<style scoped>
.toast {
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
  position: absolute;
  top: 2%;
  right: 2%;
  width: fit-content;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.toast--success {
  background-color: var(--secondary-color);
  color: var(--primary-color) !important;
}
.toast--success p{
    color: var(--primary-color) !important;
}
.toast--error {
  background-color: #ff204e;
  color: var(--text-color);
}
.toast--warning {
  background-color: #fcf8e3;
  color: var(--text-color);
}
.toast--info {
  background-color: #d9edf7;
  color: var(--text-color);
}

.toast-icon {
  margin-right: 1rem;
}

.toast-content {
  flex-grow: 1;
}

.toast-close {
  cursor: pointer;
}

.toast-timer {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: width 0.1s linear;
}
</style>
