# circle-wheel 环形图

### 介绍

大转盘 支持动画时长设置 自定义逻辑

### 引入

```js
import Vue from 'vue';
import { CircleWheel } from 'quick_vue';

Vue.use(CircleWheel);
```

## 代码演示

### 基础用法

```html
<quick-wheel
  :prizeRotate="prizeRotate"
  :picList="picList"
  v-on:end="handerEnd"
></quick-wheel>
```

```js
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
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| picList | 转盘背景图 {plate:'转盘图片',dir:'指针图片'} | _object_ | {} |
| prizeRotate | 通过改变旋转角度，定义自己的中奖逻辑 | _number_ | 0 |
| duration | 动画时长 | _number_ | 4000 |

### events

| 参数 | 说明                              | 类型 | 默认值 |
| ---- | --------------------------------- | ---- | ------ |
| end  | 旋转结束后回调=》回调参数旋转角度 | _fn_ |        |
