<template>
  <div id="TripleBarsvg" :class="$style.main">
    <div id="main" :class="$style.chart"></div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import * as echarts from 'echarts/core'
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { SVGRenderer } from 'echarts/renderers'

export default {
  name: 'TripleBarsvg',
  setup() {
    onMounted(() => {
      echarts.use([
        DatasetComponent,
        TooltipComponent,
        GridComponent,
        LegendComponent,
        BarChart,
        SVGRenderer
      ])

      const chartDom = document.getElementById('main')
      const myChart = echarts.init(chartDom, null, {
        renderer: 'svg'
      })

      const option = {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', '2020', '2021', '2022'],
            ['Matcha', 43.3, 85.8, 93.7],
            ['Milk', 83.1, 73.4, 55.1],
            ['Cocoa', 86.4, 65.2, 82.5],
            ['Brownie', 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      }

      option && myChart.setOption(option)
    })
  }
}
</script>

<style module>
.chart {
  width: 500px;
  max-width: 90vw;
  max-height: 100vh;
  height: 500px;
  margin: 0px auto;
  padding-top: 30px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 4px 4px 6px #a9a9a9, -4px -4px 6px #ffffff;
}
.main {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(241, 241, 241);
}
</style>
