<template>
  <form class="add-form" @submit="onSubmit">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="completed" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: 'AddTask-Component',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      text: '',
      day: '',
      completed: false
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    onSubmit(e) {
      e.preventDefault()

      if (this.text && this.day) {
        this.$emit('add-task', {
          id: Math.random() * 100,
          title: this.text,
          day: this.day,
          completed: this.completed
        })
        this.text = ''
        this.day = ''
        this.completed = false
      } else {
        alert('Please fill in all fields')
      }

      //   if (!this.text) {
      //     return alert('Please add a task')
      //   }
      //   const task = {
      //     id: this.tasks.length + 1,
      //     title: this.text,
      //     day: this.day,
      //     completed: this.completed
      //   }
      //   this.tasks.push(task)
      //   this.text = ''
      //   this.day = ''
      //   this.completed = false
      // }
    }
  }
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
