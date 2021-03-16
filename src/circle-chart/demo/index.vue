<template>
  <div class="test">
    <quick-circle-chart :number="50" title="50分"></quick-circle-chart>
  </div>
</template>

<script>
import TestDemo from '../index.vue';

export default {
  components: {
    TestDemo,
  },
};
</script>
<style scoped>
.test {
  display: flex;
  justify-content: center;
  padding: 50px;
}
</style>
