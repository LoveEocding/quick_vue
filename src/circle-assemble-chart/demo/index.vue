<template>
  <div class="test">
    <quick-circle-assemble-chart
      :list="list"
      @path_click="pathClick"
    ></quick-circle-assemble-chart>
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
        {
          name: '进度一',
          precent: 50,
          color: 'red',
        },
        {
          name: '进度二',
          precent: 20,
          color: 'green',
        },
        {
          name: '进度三',
          precent: 30,
          color: '#FF6C11',
        },
      ],
    };
  },
  methods: {
    pathClick(item) {
      console.log(item);
    },
  },
};
</script>
<style scoped>
.test {
  padding: 50px;
}
</style>
