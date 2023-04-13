<template>
  <div ref="chart" style="width: 350px; height: 550px"></div>
</template>

<script>
import * as echarts from 'echarts/core'
import { TooltipComponent, GeoComponent } from 'echarts/components'
import { SVGRenderer } from 'echarts/renderers'

//define seat number variable for scope purposes
let seatNumber = null

export default {
  name: 'FlightSeatmap',

  //emit to pass data to parent component
  emits: ['setseatNumber'],

  mounted() {
    echarts.use([TooltipComponent, GeoComponent, SVGRenderer])

    const chartDom = this.$refs.chart
    const myChart = echarts.init(chartDom, null, {
      renderer: 'svg'
    })
    let option

    fetch('/flight-seats.svg')
      .then((res) => res.text())
      .then((svg) => {
        echarts.registerMap('flight-seats', { svg })
        const takenSeatNames = [
          '26E',
          '34A',
          '34B',
          '30G',
          '26D',
          '31A',
          '31B',
          '25G',
          '31C',
          '26C',
          '25D',
          '23C',
          '21A',
          '20F'
        ]
        option = {
          tooltip: {},
          geo: {
            map: 'flight-seats',
            roam: true,
            selectedMode: 'multiple',
            layoutCenter: ['45%', '40%'],
            layoutSize: '120%',
            tooltip: {
              show: true
            },
            itemStyle: {
              color: '#fff'
            },
            emphasis: {
              itemStyle: {
                color: undefined,
                borderColor: 'green',
                borderWidth: 2
              },
              label: {
                show: false
              }
            },
            select: {
              itemStyle: {
                color: 'green'
              },
              label: {
                show: false,
                textBorderColor: '#fff',
                textBorderWidth: 2
              }
            },
            regions: makeTakenRegions(takenSeatNames)
          }
        }

        function makeTakenRegions(takenSeatNames) {
          const regions = []
          for (let i = 0; i < takenSeatNames.length; i++) {
            regions.push({
              name: takenSeatNames[i],
              silent: true,
              itemStyle: {
                color: '#bf0e08'
              },
              emphasis: {
                itemStyle: {
                  borderColor: '#aaa',
                  borderWidth: 1
                }
              },
              select: {
                itemStyle: {
                  color: '#bf0e08'
                }
              }
            })
          }
          return regions
        }

        myChart.setOption(option)

        // Get selected seats.
        myChart.on(
          'geoselectchanged',
          function (params) {
            const selectedNames = params.allSelected[0].name.slice()
            // Remove taken seats.
            for (let i = selectedNames.length - 1; i >= 0; i--) {
              if (takenSeatNames.indexOf(selectedNames[i]) >= 0) {
                selectedNames.splice(i, 1)
              }
            }
            //pass selected seat data to parent component
            seatNumber = selectedNames
            console.log(seatNumber)
            this.$emit('setseatNumber', seatNumber)
          }.bind(this)
          //end emit code
        )
      })

    option && myChart.setOption(option)
  }
}
</script>
