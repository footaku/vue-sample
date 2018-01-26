<template>
  <section>
    <todo-add></todo-add>
    <ul>
      <todo-list
        v-for="(item, index) in $store.state.todoItems"
        v-bind:todo-item="item"
        v-bind:todo-item-index="index"
        v-bind:key="item.name">
      </todo-list>
    </ul>
    </section>
</template>

<script>
import todoAdd from '@/components/TodoAdd.vue'
import todoList from '@/components/TodoList.vue'
import store from '@/vuex/index.js'

export default {
  name: 'Todo',
  el: '#app',
  store: store,
  components: {
    'todoAdd': todoAdd,
    'todoList': todoList
  }
}
</script>
