<template>
  <div
    class="circle-chart"
    :style="{ width: radius + 10 + 'px', height: radius + 10 + 'px' }"
  >
    <div class="tit">{{ this.number }}分</div>
    <svg :width="radius + 10" :height="radius + 10">
      <path
        :d="`M${radius / 2} 0  A${radius / 2} ${radius / 2} 0 1 0 ${
          radius / 2
        } ${radius} A${radius / 2} ${radius / 2} 0 1 0 ${radius / 2} 0`"
        stroke="rgba(230, 230, 230, 1)"
        fill="none"
        style="transform: translate(5px, 5px)"
        stroke-width="10"
      ></path>
      <path
        :d="`M${radius / 2} 0  A${radius / 2} ${radius / 2} 0 1 1 ${
          radius / 2
        } ${radius} A${radius / 2} ${radius / 2} 0 1 1 ${radius / 2} 0`"
        stroke="green"
        :stroke-dasharray="`${val} 3000`"
        fill="none"
        stroke-width="10"
        stroke-linecap="round"
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
  },
  data() {
    return {
      val: 0,
    };
  },
  created() {
    const score = (this.number / 100) * Math.PI * 2 * (this.radius / 2);
    const t = setInterval(() => {
      this.val++;
      if (this.val >= score) {
        clearInterval(t);
      }
    }, 10);
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
    transform: translate(-50%, -50%);
  }
  svg {
    transition: all 1s;
    animation: all 1s;
  }
}
</style>
