<template>
  <div>
    <HelloWorld2></HelloWorld2>
    <p style="background-color: yellow">
      ここはページ2だよ～～ん。
    </p>
    <router-link to="/VuetifySample">Go to VuetifySample</router-link>
  </div>
</template>

<script>
import HelloWorld2 from '@/components/HelloWorld2'

export default {
  name: 'App',
  components: {
    HelloWorld2
  }
}
</script>

<style>
</style>
