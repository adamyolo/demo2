<template>
  <div id="app">
    <DraggableComponent />
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DraggableComponent from './components/DraggableComponent.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    DraggableComponent
  }
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
