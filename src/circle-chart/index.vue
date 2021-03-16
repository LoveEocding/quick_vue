<template>
  <div
    class="circle-chart"
    :style="{ width: radius + 10 + 'px', height: radius + 10 + 'px' }"
  >
    <div class="tit">{{ this.title }}</div>
    <svg :width="radius + 10" :height="radius + 10">
      <defs>
        <!-- 渐变曲线 -->
        <linearGradient
          id="quick-circle-gradient"
          x1="100%"
          y1="0%"
          x2="0%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="barColor[0]"></stop>
          <stop offset="100%" :stop-color="barColor[1]"></stop>
        </linearGradient>
      </defs>
      <path
        :d="`M${radius / 2} 0  A${radius / 2} ${radius / 2} 0 1 0 ${
          radius / 2
        } ${radius} A${radius / 2} ${radius / 2} 0 1 0 ${radius / 2} 0`"
        :stroke="bgColor"
        fill="none"
        style="transform: translate(5px, 5px)"
        :stroke-width="strokeWidth"
      ></path>
      <path
        :d="`M${radius / 2} 0  A${radius / 2} ${radius / 2} 0 1 1 ${
          radius / 2
        } ${radius} A${radius / 2} ${radius / 2} 0 1 1 ${radius / 2} 0`"
        stroke="url(#quick-circle-gradient)"
        :stroke-dasharray="`${val} 3000`"
        fill="none"
        :stroke-width="strokeWidth"
        :stroke-linecap="isRound ? 'round' : ''"
        style="transform: translate(5px, 5px)"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'quick-circle-chart',
  props: {
    radius: {
      type: Number,
      default: 100,
    },
    number: {
      type: Number,
      default: 80,
    },
    title: {
      type: String,
      default: '中间内容',
    },
    strokeWidth: {
      type: Number,
      default: 10,
    },
    bgColor: {
      type: String,
      default: 'rgba(230, 230, 230, 1)',
    },
    barColor: {
      type: Array,
      default: () => ['#50E1B1', '#2282FF'],
    },
    isAnimation: {
      type: Boolean,
      default: true,
    },
    isRound: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      val: 0,
    };
  },
  created() {
    const score = (this.number / 100) * Math.PI * 2 * (this.radius / 2);
    if (this.isAnimation) {
      const t = setInterval(() => {
        this.val++;
        if (this.val >= score) {
          clearInterval(t);
        }
      }, 10);
    } else {
      this.val = score;
    }
  },
};
</script>

<style scoped lang="scss">
.circle-chart {
  position: relative;
  .tit {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  svg {
    transition: all 1s;
    animation: all 1s;
  }
}
</style>
