<template>
  <div v-for="task in tasks" :key="task.id">
    <TaskVue
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>

<script>
import TaskVue from './Task.vue'

export default {
  name: 'Tasks-Component',
  props: {
    tasks: Array
  },
  components: {
    TaskVue
  },
  emits: ['delete-task', 'toggle-reminder']
}
</script>
