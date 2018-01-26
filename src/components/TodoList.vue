<template>
  <li>
    {{todoItem.name}}
    <todo-remove v-bind:index="todoItemIndex"></todo-remove>
  </li>
</template>

<script>
import todoRemove from '@/components/TodoRemove.vue'

export default {
  name: 'todoList',
  props: ['todoItem', 'todoItemIndex'],
  components: { todoRemove }
}
</script>
