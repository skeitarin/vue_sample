<template>
  <div>
    <HelloWorld></HelloWorld>
    <p style="background-color: red">
      ここはページ１です。
    </p>
    <router-link to="/page2">Go to page2</router-link>
    <p v-if="msg.length > 0">{{msg}}</p>
    <p v-else>no text</p>
    <input type="text" v-model="msg">
    <input type="button" v-on:click="clear()" value="clear">
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'hello'
    }
  },
  methods: {
    clear () {
      this.msg = ''
    }
  }
}
</script>

<style>
</style>
