<template>
  <div class="test">
    <quick-bar-chart :is-anmation="true" :list="list"></quick-bar-chart>
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
      list: [
        { score: 200, name: '其他目录' },
        { score: 55.6, name: '实训' },
        { score: 100, name: '学分' },
      ],
    };
  },
};
</script>
<style scoped>
.test {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 50px;
}
</style>
