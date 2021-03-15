<template>
  <div class="bar_chart">
    <div
      :style="{ width: width + 'px', height: height + 'px' }"
      class="bar_chart_content"
    >
      <canvas
        class="bar_chart_bg"
        ref="BarChartBg"
        :width="width"
        :height="height"
      ></canvas>
      <div class="fix_content">
        <div class="bar_item" v-for="(item, index) in list" :key="index">
          <div class="bar_item_score">{{ item.score }}</div>
          <div
            class="bar_item_height"
            :style="{
              height: `${(height * item.score) / baseNumber}px`,
              borderRadius: isRadius ? '20px' : '0px',
              background: `linear-gradient(180deg, ${barColor[0]} 0%, ${barColor[1]} 100%)`,
              transition: isAnmation ? 'all 1s linear' : 'none',
            }"
          ></div>
          <div class="bar_item_name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quick-bar-chart',
  props: {
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 150,
    },
    isRadius: {
      type: Boolean,
      default: false,
    },
    isAnmation: {
      type: Boolean,
      default: false,
    },
    barColor: {
      type: Array,
      default: () => ['#2182FF', '#50E1B1'],
    },
    list: {
      type: Object,
      default: () => [],
    },
  },
  data() {
    return {
      baseNumber: 0, // 高度基数
    };
  },
  mounted() {
    this.handerCanvas();
    this.computeMaxBase(this.list);
  },
  methods: {
    // 计算高度基数不能超过最高高度
    computeMaxBase(list) {
      const max = Math.max(...list.map((item) => item.score));
      this.baseNumber = max + max / 3;
    },
    // 画线条
    handerCanvas() {
      const BarChart = this.$refs.BarChartBg;
      const ctx = BarChart.getContext('2d');
      ctx.strokeStyle = 'rgba(151, 151, 151, 0.8)';
      const spaceVal = (this.height - 20) / 3;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * spaceVal);
        ctx.lineTo(this.width, i * spaceVal);
        ctx.stroke(); // 绘制路径。
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bar_chart {
  overflow-x: scroll;
  &_content {
    position: relative;
    margin: 0 auto;
    .fix_content {
      position: absolute;
      bottom: 0;
      left: 50%;
      display: flex;
      flex-direction: row;
      transform: translateX(-50%);
      .bar_item {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        align-items: center;
        justify-content: flex-end;
        width: auto;
        margin-right: 20px;
        &_score {
          margin-bottom: 3px;
          color: #999;
          font-size: 12px;
        }
        &_height {
          width: 18px;
          height: 0;
          background: rgba(80, 225, 177, 1);
          transition-delay: 500;
        }
        &_name {
          color: #333;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
