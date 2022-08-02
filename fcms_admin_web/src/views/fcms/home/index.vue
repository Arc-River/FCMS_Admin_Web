<template>
  <div class="app-container">
<!--        <panel-group />-->
<!--    <pie-chart></pie-chart>-->
<!--    <bar-chart></bar-chart>-->
<!--    <raddar-chart></raddar-chart>-->

    <!--  折线图  -->
    <el-row :gutter="50">
      <div style="overflow-y: auto">
        <line-chart :chart-data="historyData" style="min-width: 700px"/>
      </div>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from '@/views/dashboard/PanelGroup'
import LineChart from '@/views/dashboard/LineChart'
import PieChart from '@/views/dashboard/PieChart'
import BarChart from '@/views/dashboard/BarChart'
import RaddarChart from '@/views/dashboard/RaddarChart'
import { listHistoryRecordData } from '@/api/fcms/record'

export default {
  name: 'AdminHome',
  components: {
    PieChart,
    BarChart,
    RaddarChart,
    PanelGroup,

    LineChart
  },
  data() {
    return {
      historyData: {}

    }
  },
  mounted() {
      var historyParams = {
        params: {
          beginAuditedTime: this.formatDate(this.beforeSomeDayDate(7), 'yyyy-MM-dd') + ' 00:00:00',
          endAuditedTime: this.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
        }
      }
      // this.getHistoryRecordData(historyParams)
  },
  methods: {
    /** 历史记录 */
    getHistoryRecordData(params) {
      listHistoryRecordData(params).then(response => {
        let menu_arr = [], status_one = [], status_two = [], status_three = [], status_four = [], status_five = [],
          status_six = []
        for (let row of response.rows) {
          menu_arr.push(row.rd_date)
          status_one.push(row.status_one)
          status_two.push(row.status_two)
          status_three.push(row.status_three)
          status_four.push(row.status_four)
          status_five.push(row.status_five)
          status_six.push(row.status_six)
        }
        this.historyData = {
          menuArr: menu_arr,
          statusOne: status_one,
          statusTwo: status_two,
          statusThree: status_three,
          statusFour: status_four,
          statusFive: status_five,
          statusSix: status_six
        }
      })
    },
    // n天前的日期
    beforeSomeDayDate(days) {
      var historyBeginDate = new Date()
      historyBeginDate.setDate(historyBeginDate.getDate() - days)
      return historyBeginDate
    },
    // 格式化日期
    formatDate(date, fmt) {
      var o = {
        'M+': date.getMonth() + 1,               //月份
        'd+': date.getDate(),                    //日
        'h+': date.getHours(),                   //小时
        'm+': date.getMinutes(),                 //分
        's+': date.getSeconds(),                 //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        'S': date.getMilliseconds()             //毫秒
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      }
      return fmt
    }

  }
}
</script>

<style lang="scss" scoped>

.box-card {
  margin-bottom: 10px;
  min-width: 600px;
}

.title-container {

  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 30px;

  .title-view {
    width: 7px;
    height: 25px;
    background: #409EFF;
    margin-right: 10px;
  }

  .title-text {
    font-size: 20px;
  }
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  text-align: center;
}

.content-text {
  margin-right: 20px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}


.chart-wrapper {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 32px;
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
