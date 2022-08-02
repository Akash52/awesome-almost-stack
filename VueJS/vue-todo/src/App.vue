<template>
  <div class="container">
    <HeaderVue title="Task Tracker" />
    <div v-if="showAddTask"><AddTask @add-task="addTask" /></div>

    <TasksVue
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import HeaderVue from './components/Header.vue'
import TasksVue from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {
    HeaderVue,
    TasksVue,
    AddTask
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  methods: {
    // eslint-disable-next-line space-before-function-paren
    addTask(task) {
      this.tasks.push(task)
    },
    // eslint-disable-next-line space-before-function-paren
    deleteTask(id) {
      if (confirm('Are you sure you want to delete this task?')) {
        this.tasks = this.tasks.filter(task => task.id !== id)
      }
    },
    // eslint-disable-next-line space-before-function-paren
    toggleReminder(id) {
      this.tasks = this.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task
      })
    }
  },
  // eslint-disable-next-line space-before-function-paren
  created() {
    this.tasks = [
      {
        id: 1,
        title: 'Learn Vue',
        day: 'March 23 at 10:00 AM',
        completed: true
      },
      {
        id: 2,
        title: 'Learn Vue Router',
        day: 'March 24 at 10:00 AM',
        completed: true
      },
      {
        id: 3,
        title: 'Learn Vuex',
        day: 'March 25 at 10:00 AM',
        completed: false
      },
      {
        id: 4,
        title: 'Learn Vue Devtools',
        day: 'March 26 at 10:00 AM',
        completed: false
      },
      {
        id: 5,
        title: 'Learn Vue Loader',
        day: 'March 27 at 10:00 AM',
        completed: false
      }
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
