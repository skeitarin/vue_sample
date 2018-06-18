<template>
  <div>
    <bar-chart :chart-data="datacollection"></bar-chart>
    <button class="button is-primary" @click="fillData()">View Graph</button>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import BarChart from '@/components/Barchart'

export default {
  extends: Bar,
  components: {
    BarChart
  },
  data () {
    return {
      datacollection: null
    }
  },
  created () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ['伊賀 清高', '清水 慶太', '多田 健太郎', '高野 翔生', '平井 美寿希'],
        datasets: [
          {
            type: 'line',
            label: '平均',
            backgroundColor: '#ff0000',
            fill: false,
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          },
          {
            type: 'bar',
            label: 'KSB3',
            backgroundColor: '#008080',
            data: [0, this.getRandomInt(), this.getRandomInt(), 0, 0]
          },
          {
            type: 'bar',
            label: 'VIZ1',
            backgroundColor: '#006400',
            data: [this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style>

</style>
