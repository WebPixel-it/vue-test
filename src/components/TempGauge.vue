<template>
  <div ref="chart" style="width: 300px; height: 250px; margin: 0 auto"></div>
</template>

<script>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts/core'
import { GaugeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([GaugeChart, CanvasRenderer])

export default {
  name: 'TempGauge',
  setup() {
    const chart = ref(null)

    //define variable for scope purposes and create function to update city and temp values
    let currentCity = ''
    let currentValue = ''
    const updateChart = (value, city) => {
      currentValue = value
      currentCity = city // update the current city variable
    }
    onMounted(() => {
      const myChart = echarts.init(chart.value)

      //add city and temp values and create baselines
      const values = [25, 36] //temp values to repeat
      const cities = ['Milano', 'Athens']
      let counter = 0 // Counter baseline
      let count = 0

      const option = {
        series: [
          {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 50,
            splitNumber: 10,
            itemStyle: {
              color: '#58D9F9',
              shadowColor: 'rgba(0,138,255,0.45)',
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2
            },
            progress: {
              show: true,
              width: 30
            },
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 30
              }
            },
            axisTick: {
              distance: -45,
              splitNumber: 5,
              lineStyle: {
                width: 2,
                color: '#999'
              }
            },
            splitLine: {
              distance: -52,
              length: 14,
              lineStyle: {
                width: 3,
                color: '#999'
              }
            },
            axisLabel: {
              distance: -10,
              color: '#999',
              fontSize: 14
            },
            anchor: {
              show: false
            },
            title: {
              show: false
            },
            detail: {
              valueAnimation: true,
              width: '80%',
              lineHeight: 30,
              borderRadius: 8,
              offsetCenter: [0, '-15%'],
              fontSize: 25,
              fontWeight: 'bolder',
              formatter: function () {
                //function to display both the city and temp
                return currentValue + `°C` + '\n' + currentCity
              },
              color: 'inherit'
            },
            data: [
              {
                value: 0
              }
            ]
          },
          {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 50,

            itemStyle: {
              color: '#5CABBF',
              shadowColor: 'rgba(0,138,255,0.75)',
              shadowBlur: 5,
              shadowOffsetX: 2,
              shadowOffsetY: 2
            },
            progress: {
              show: true,
              width: 8
            },
            pointer: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 0
              }
            ]
          }
        ]
      }

      setInterval(function () {
        //value variable is used in eCharts and text label functions
        //city is only used for the text label functions

        //start eCharts and text label value settings
        const value = values[counter] // Get the current value from the array
        counter = (counter + 1) % values.length

        //start text label data settings
        //add city data and pass value out of this function scope
        const city = cities[count] // Get the current city from the array
        count = (count + 1) % cities.length
        updateChart(value, city)
        //endtext label data settings

        //echarts value settings only
        myChart.setOption({
          series: [
            {
              data: [
                {
                  value: value
                }
              ]
            },
            {
              data: [
                {
                  value: value
                }
              ]
            }
          ]
        })
      }, 3000)

      myChart.setOption(option)
    })

    return { chart }
  }
}
</script>
