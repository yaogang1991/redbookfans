<template>
  <div class="dashboard-container">
    <panel-group
      :panel-data="panelData"
      :panel-init-data="panelInitData"
      @handleSetLineChartData="handleSetLineChartData"
    />
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="chartData" :axis-data="axisData" />
    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import { getData } from '@/api/data'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup,
    LineChart
  },
  data() {
    return {
      panelData: {},
      panelInitData: {},
      axisData: [],
      chartData: []
    }
  },
  mounted() {
    getData('lastest').then(res => {
      this.panelData = res[0]
    }),
    getData('day').then(res => {
      this.axisData = res.map(m => m.timestamp)
      this.chartData = res.map(m => m.fans)
    }),
    getData('day_beginfront-end/src/views/dashboard/index.vue').then(res => {
      this.panelInitData = res[0]
    })
  },
  methods: {
    handleSetLineChartData(type) {
      getData('day').then(res => {
        let lineChartData = {}
        switch (type) {
          case 'fans':
            lineChartData = res.map(m => m.fans)
            break
          case 'liked':
            lineChartData = res.map(m => m.liked)
            break
          case 'collected':
            lineChartData = res.map(m => m.collected)
            break
        }
        this.chartData = lineChartData
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
  height: 100%;
}
</style>
