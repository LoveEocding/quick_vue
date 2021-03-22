# count-down 倒计时

### 介绍

倒计时组件 颜色和字体大小继承父级 支持自定义链接符号

### 引入

```js
import Vue from 'vue';
import { CountDown } from 'quick_vue';

Vue.use(CountDown);
```

## 代码演示

### 基础用法

```html
<template>
  <div class="test">
    <quick-count-down
      timeLong="588888"
      linkSymbol=":"
      v-on:end="timeoutEnd"
    ></quick-count-down>
  </div>
</template>
```

```js
import TestDemo from '../index.vue';
export default {
  components: {
    TestDemo,
  },
  methods: {
    timeoutEnd() {
      console.log('倒计时结束');
    },
  },
};
```

## API

### Props

| 参数       | 说明       | 类型     | 默认值 |
| ---------- | ---------- | -------- | ------ |
| timeLong   | 剩余多少秒 | _number_ | 0      |
| linkSymbol | 链接符号   | _string_ | ':'    |

### events

| 参数 | 说明               | 类型 | 默认值 |
| ---- | ------------------ | ---- | ------ |
| end  | 倒计时结束后的回调 | _fn_ |        |
