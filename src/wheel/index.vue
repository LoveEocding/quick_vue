<template>
  <div class="wheel" style="width: 200px; height: 200px">
    <div
      class="plate"
      :style="{
        background: `url(${picList.plate}) 0% 0%/100% 100%`,
        animation: isLotteryIng ? '' : 'none',
        transform: `rotate(${localRotate}deg)`,
        transition: `all ${
          (duration / 1000) * 2
        }s cubic-bezier(0, 0.5, 0.55, 0.93)`,
      }"
    ></div>
    <div
      class="dir"
      :style="{ background: `url(${picList.dir}) 0% 0%/100% 100%` }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'quick-wheel',
  props: {
    picList: {
      type: Object,
      default: () => {
        return {
          plate:
            'https://habaocdn.fuhuibao.club/flb/common/1603693454631大转盘@2x.png',
          dir:
            'https://habaocdn.fuhuibao.club/flb/common/1603693468835转盘指针@2x.png',
        };
      },
    },
    prizeRotate: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      isLotteryIng: false,
      localRotate: this.prizeRotate,
    };
  },
  watch: {
    prizeRotate(val) {
      console.log(val);
      this.isLotteryIng = true;
      setTimeout(() => {
        this.isLotteryIng = false;
        this.localRotate =
          360 * 3 + val + Math.floor(this.localRotate / 360) * 360;
        this.$emit('end', val);
      }, this.duration);
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.wheel {
  position: relative;
  .plate {
    position: absolute;
    width: inherit;
    height: inherit;
    left: 0;
    top: 0;
    animation: plate-circle 1s infinite linear;
    transition: all 4s cubic-bezier(0, 0.5, 0.55, 0.93);
  }
  //抽奖固定旋转
  @keyframes plate-circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .dir {
    width: 22%;
    height: 35%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
  }
}
</style>
