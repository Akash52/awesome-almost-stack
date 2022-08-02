import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Wake up',
        done: false
      },
      {
        id: 2,
        title: 'Get bananas',
        done: false
      },
      {
        id: 3,
        title: 'Eat bananas',
        done: false
      }
    ]
  },
  mutations: {
    // eslint-disable-next-line space-before-function-paren
    addTask(state, newTaskTitle) {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
      }
      state.tasks.push(newTask)
    },
    // eslint-disable-next-line space-before-function-paren
    doneTask(state, id) {
      const task = state.tasks.filter((task) => task.id === id)[0]
      task.done = !task.done
    },
    // eslint-disable-next-line space-before-function-paren
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id)
    }
  },
  actions: {},
  getters: {}
})
