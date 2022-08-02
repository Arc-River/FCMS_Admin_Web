<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ menuArr, statusThree, statusFour, statusFive, statusSix } = {}) {
      this.chart.setOption({
        xAxis: {
          data: menuArr || ['','','','','','',''],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['驳回', '通过', '完成', '回收']
        },
        series: [
          {
            name: '驳回',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#FF5E5E',
                lineStyle: {
                  color: '#FF5E5E',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: statusThree,
            animationDuration: 3000,
            animationEasing: 'quadraticOut'
          },
          {
            name: '通过',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: statusFour,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
          {
            name: '完成',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#2ED478',
                lineStyle: {
                  color: '#2ED478',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: statusFive,
            animationDuration: 2500,
            animationEasing: 'quadraticOut'
          },
          {
            name: '回收', itemStyle: {
              normal: {
                color: '#BBBCC0',
                lineStyle: {
                  color: '#BBBCC0',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            data: statusSix,
            animationDuration: 2000,
            animationEasing: 'cubicInOut'
          }
        ]
      })
    }
  }
}
</script>
