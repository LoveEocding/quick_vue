<template>
  <div class="test">
    <quick-wheel
      :prize-rotate="prizeRotate"
      :pic-list="picList"
      @end="handerEnd"
    ></quick-wheel>
    <div @click="prizeRotate += 30" style="margin-top: 30px">增加30角度</div>
  </div>
</template>

<script>
import QuickWheel from '../index.vue';

export default {
  components: {
    QuickWheel,
  },

  data() {
    return {
      prizeRotate: 0,
      picList: {
        plate:
          'https://habaocdn.fuhuibao.club/flb/common/1603693454631大转盘@2x.png',
        dir:
          'https://habaocdn.fuhuibao.club/flb/common/1603693468835转盘指针@2x.png',
      },
    };
  },

  methods: {
    handerEnd(val) {
      console.log(val);
    },
  },
};
</script>
<style scoped>
.test {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
