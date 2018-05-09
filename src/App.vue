<template>
  <div id="app">
    <myheader></myheader>

    <router-view/> <!-- vue-routerでcomponentをココに挿入する -->

  </div>
</template>

<script>
import myheader from './components/MyHeader' /* componentのインストール */

export default {
  name: 'App',
  components: {
    myheader
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
