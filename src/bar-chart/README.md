# Bar-Chart 柱形图

### 介绍

柱状图;支持渐变，支持动画显示与否，支持改变柱状圆角

### 引入

```js
import Vue from 'vue';
import { BarChart } from 'quick_vue';

Vue.use(BarChart);
```

## 代码演示

### 基础用法

```html
<quick-bar-chart :isAnmation="true" :list="list"></quick-bar-chart>
```

```js
export default {
  components: {
    BarChart,
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
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 容器宽 | _number_ | 300 |
| height | 容器高 | _number_ | 150 |
| isRadius | 柱状是否需要圆角 | _boolen_ | false |
| isAnmation | 是否需要动画 | _boolen_ | false |
| barColor | 柱状颜色 array[0] 开始颜色 array[1] 结束颜色 支持渐变 | _array_ | ['red','red'] |
| list | 数据 | _array_ | [{name:'名称',height:'数值'}] |
