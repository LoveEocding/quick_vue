# circle-assemble-chart 环形图

### 介绍

环形图;支持宽度设置;各个进度颜色设置；点击回调

### 引入

```js
import Vue from 'vue';
import { CircleAssembleChart } from 'quick_vue';

Vue.use(CircleAssembleChart);
```

## 代码演示

### 基础用法

```html
<template>
  <div class="test">
    <quick-circle-assemble-chart
      :list="list"
      v-on:path_click="pathClick"
    ></quick-circle-assemble-chart>
  </div>
</template>
```

```js
export default {
  components: {
    CircleAssembleChart,
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
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸宽高 | _arr_ | [100,100] |
| list | 数据 [{name:'',percent:20,color:'red'},{name:'',percent:80,color:'green'}] | _arr_ | [] |
| title | 圆中间内容 | _string_ |  |
| strokeWidth | 路径宽度 | _number_ | 10 |

### events

| 参数       | 说明         | 类型 | 默认值 |
| ---------- | ------------ | ---- | ------ |
| path_click | 点击单个回调 | _fn_ |        |
