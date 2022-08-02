<template>
  <div class="home">
    <field-add-task />
    <task-list v-if="$store.state.tasks.length" />
    <no-tasks v-else />
  </div>
</template>

<script>
import FieldAddTask from '../components/Todo/FieldAddTask.vue'
import NoTasks from '../components/Todo/NoTasks.vue'
import TaskList from '../components/Todo/TaskList.vue'
export default {
  components: { FieldAddTask, TaskList, NoTasks },
  name: 'Home'
}
</script>
