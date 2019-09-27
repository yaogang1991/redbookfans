<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="24" :sm="24" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('fans')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            粉丝
          </div>
          <count-to :start-val="0" :end-val=panelData.fans :duration="1800" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('liked')">
        <div class="card-panel-icon-wrapper icon-liked">
          <svg-icon icon-class="liked" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            点赞
          </div>
          <count-to :start-val="0" :end-val=panelData.liked :duration="2000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('collected')">
        <div class="card-panel-icon-wrapper icon-collection">
          <svg-icon icon-class="collection" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            收藏
          </div>
          <count-to :start-val="0" :end-val=panelData.collected :duration="2200" class="card-panel-num" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  props: {
    panelData: {
      type: Object,
      required: true
    }
  },
  components: {
    CountTo
  },
  computed: {
    device() {
      return this.$store.state.app.device
    },

  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 180px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 8px 8px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #409eff;
      }

      .icon-liked {
        background: #f56c6c;
      }

      .icon-collection {
        background: #e6a23c;
      }
    }

    .icon-people {
      color: #409eff;
    }

    .icon-liked {
      color: #F56C6C;
    }

    .icon-collection {
      color: #e6a23c;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 18px 0 0 18px;
      padding: 24px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 96px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin-top: 36px;
      margin-bottom: 36px;
      margin-right: 36px;

      .card-panel-text {
        line-height: 40px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 32px;
        margin-bottom: 24px;
      }

      .card-panel-num {
        font-size: 40px;
      }
    }
  }
}
</style>
