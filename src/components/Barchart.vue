<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['伊賀 清高', '清水 慶太', '多田 健太郎', '高野 翔生', '平井 美寿希'],
      datasets: [
        {
          type: 'line',
          label: '平均',
          backgroundColor: '#ff0000',
          fill: false,
          data: [45, 30, 100, 13, 10]
        },
        {
          type: 'bar',
          label: 'KSB3',
          backgroundColor: '#008080',
          data: [0, 70, 150, 0, 0]
        },
        {
          type: 'bar',
          label: 'VIZ1',
          backgroundColor: '#006400',
          data: [20, 30, 0, 45, 40]
        }
      ]}, {
      title: {
        display: true,
        text: '実績集計'
      },
      scales: {
        yAxes: [{
          stacked: true
        }],
        xAxes: [ {
          stacked: true,
          categoryPercentage: 0.5,
          barPercentage: 1
        }]
      },
      legend: {
        display: true
      },
      responsive: true,
      maintainAspectRatio: false
    })
  }
}
</script>
