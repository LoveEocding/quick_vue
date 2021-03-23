<template>
  <div class="test">
    <quick-count-down
      :time-long="timelong"
      @end="timeoutEnd"
    ></quick-count-down>
  </div>
</template>

<script>
import TestDemo from '../index.vue';

export default {
  components: {
    TestDemo,
  },
  data() {
    return {
      timelong: 320,
    };
  },
  methods: {
    timeoutEnd() {
      console.log('倒计时结束');
    },
  },
};
</script>
<style scoped>
.test {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: red;
}
</style>
