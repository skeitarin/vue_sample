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
      datacollection: null,
      graphProps: {}
    }
  },
  computed: {
    labels: function () {
      return this.graphProps.labels
    },
    datasets: function () {
      return this.graphProps.datasets
    }
  },
  created () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.setGraphProps()
      this.datacollection = {
        labels: this.labels,
        datasets: this.datasets
      }
    },
    setGraphProps () {
      var dataList = this.generateDummy()
      var colorList = ['#4682b4', '#008080', '#006400', '#1e90ff', '#7cfc00', '#00fa9a']
      var colorIdx = 0
      var prjList = []
      var userList = []
      var datasets = []
      dataList.forEach(function (val, i) {
        if (prjList.indexOf(val.prj) === -1) {
          prjList.push(val.prj)
        }
      })
      dataList.forEach(function (val, i) {
        if (userList.indexOf(val.name) === -1) {
          userList.push(val.name)
        }
      })
      prjList.forEach(function (prj, i) {
        var timeList = []
        userList.forEach(function (name, i) {
          var list = dataList.filter(data => data.prj === prj && data.name === name)
          var time = 0
          if (list[0]) {
            list.forEach(function (list, i) {
              time += list.time
            })
          }
          timeList.push(time)
        })
        var data = {
          type: 'bar',
          label: prj,
          backgroundColor: colorList[colorIdx],
          fill: false,
          data: timeList
        }
        datasets.push(data)
        colorIdx++
      })
      this.graphProps = {
        labels: userList,
        datasets: datasets
      }
    },
    generateDummy () {
      var list = []
      for (var i = 0; i < 10; i++) {
        var info = {
          name: this.getRandomElem(['伊賀 清高', '清水 慶太', '多田 健太郎', '高野 翔生', '平井 美寿希']),
          prj: this.getRandomElem(['KSB4', 'VIZ1', 'MMK1', 'KSC', 'EKS2']),
          time: this.getRandomInt()
        }
        list.push(info)
      }
      return list
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    getRandomElem (list) {
      var i = Math.floor(Math.random() * list.length)
      return list[i]
    }
  }
}
</script>

<style>

</style>
