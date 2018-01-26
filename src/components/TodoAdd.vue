<template>
  <input v-on:keyup.enter="add"/>
</template>

<script>
export default {
  name: 'TodoAdd',
  methods: {
    add: function (event) {
      this.$store.commit('add', event.target.value)
      event.target.value = ''
    }
  }
}
</script>
