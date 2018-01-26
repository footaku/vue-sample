<template>
  <button v-on:click="remove(index)">×</button>
</template>

<script>
export default {
  name: 'TodoRemove',
  props: ['index'],
  methods: {
    remove: function (index) {
      this.$store.commit('remove', index)
    }
  }
}
</script>
