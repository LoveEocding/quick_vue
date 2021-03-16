# circle-chart 环形进度条

### 介绍

环形进度条;支持颜色渐变;支持动画显示与否;支持大小宽度设置等

### 引入

```js
import Vue from 'vue';
import { CircleChart } from 'quick_vue';

Vue.use(CircleChart);
```

## 代码演示

### 基础用法

```html
<quick-circle-chart :number="50" title="50分"></quick-circle-chart>
```

```js
export default {
  components: {
    CircleChart,
  },
  data() {},
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| radius | 圆半径 | _number_ | 100 |
| number | 百分比 100 最大 | _number_ | 50 |
| title | 圆中间内容 | _string_ |  |
| isAnmation | 是否需要入场动画 | _boolen_ | true |
| barColor | 环颜色 array[0] 开始颜色 array[1] 结束颜色 支持渐变 | _array_ | ['red','red'] |
| bgColor | 底部环形颜色 | _string_ | #FFFFFF |
| isRound | 是否圆角 | _boolen_ | true |
| strokeWidth | 路径宽度 | _number_ | 10 |
