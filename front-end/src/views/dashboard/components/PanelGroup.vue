<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('fans')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Fans
          </div>
          <count-to :start-val="0" :end-val="102400" :duration="1800" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('liked')">
        <div class="card-panel-icon-wrapper icon-liked">
          <svg-icon icon-class="liked" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Liked
          </div>
          <count-to :start-val="0" :end-val="81212" :duration="2000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('collection')">
        <div class="card-panel-icon-wrapper icon-collection">
          <svg-icon icon-class="collection" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Collection
          </div>
          <count-to :start-val="0" :end-val="9280" :duration="2200" class="card-panel-num" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
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
      margin: 36px;
      margin-left: 0px;

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

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
