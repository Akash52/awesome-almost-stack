<template>
  <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask"
    @keyup.enter="addTask"
    class="pa-3"
    outlined
    label="Add Task"
    append-icon="mdi-plus"
    hide-details
    clearable
  ></v-text-field>
</template>

<script>
export default {
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      newTaskTitle: ''
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    addTask() {
      this.$store.commit('addTask', this.newTaskTitle)
      this.newTaskTitle = ''
    }
  }
}
</script>

<style></style>
