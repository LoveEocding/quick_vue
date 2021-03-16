<template>
  <div
    class="circle-assemble-chart"
    :style="{ width: size[0] + 'px', height: size[1] + 'px' }"
  >
    <div class="title">{{ title }}</div>
    <svg viewBox="0 0 240 240">
      <template v-for="(item, key) in comPath">
        <path
          :key="key"
          :d="`M${item.begx} ${item.begy} A100 100 0  ${item.isLarge} 1 ${item.endx} ${item.endy}`"
          :stroke-width="strokeWidth"
          :stroke="item.color"
          fill="none"
          @click="handerClick(item)"
        ></path>
      </template>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'quick-circle-assemble-chart',
  props: {
    size: {
      type: Array,
      default: () => [100, 100],
    },
    title: {
      type: String,
      default: '中间内容',
    },
    strokeWidth: {
      type: Number,
      default: 20,
    },
    list: {
      type: Array,
      default: () => [
        {
          name: '进度一',
          precent: 100,
          color: 'red',
        },
      ],
    },
  },
  computed: {
    comPath() {
      let begx = 120 + Math.cos(0) * 100;
      let begy = 120 + Math.sin(0) * 100;
      let sum = 0;
      const pathList = [];
      this.list.forEach((item) => {
        sum += item.precent;
        const angle = (sum / 100) * Math.PI * 2;
        const endx = 120 + Math.cos(angle) * 100;
        const endy = 120 + Math.sin(angle) * 100;
        pathList.push({
          begx,
          begy,
          name: item.name,
          color: item.color,
          endx,
          endy,
          isLarge: item.precent >= 50 ? 1 : 0,
        });
        begx = endx;
        begy = endy;
      });
      return pathList;
    },
  },
  created() {},
  methods: {
    handerClick(item) {
      this.$emit('path_click', item);
    },
  },
};
</script>

<style scoped lang="scss">
.circle-assemble-chart {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20%;
  }
}
</style>
