<template>
  <div>
    <h1>{{ $store.state.count }}</h1>
    <h1>{{ $store.getters.score }}</h1>
    <button @click="add">Add</button>
    <button @click="asyncAdd">AsyncAdd</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  methods: {
    add() {
      this.$store.commit('add', 2)
    },
    asyncAdd() {
      this.$store.dispatch('asyncAdd', 4).then((res) => {
        if (res.ok) {
          alert('ok')
        }
      })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
