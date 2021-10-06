<template>
  <div>
      <h3>Add Todo</h3>
      <div class="add">
          <form>
              <input type="text" v-model="title" placeholder="Add Todo...">
              <input type="submit" value="Submit">
          </form>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AddTodo'
}
</script>

<style scoped>
form {
    display: flex;
}

input[type="text"] {
    flex:10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: none;
}

input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    cursor: pointer;
}
</style>