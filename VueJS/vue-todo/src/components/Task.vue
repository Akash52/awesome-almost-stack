<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.completed ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.title }}
      <i @click="onDelete(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task-Component',
  props: {
    task: Object
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    onDelete(id) {
      this.$emit('delete-task', id)
    }
  }
}
</script>

<style scoped>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
