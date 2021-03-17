# keyboard-events-plugin 移动端键盘事件监控

### 介绍

支持 IOS 和 Android 键盘事件弹起和收回监听

### 安装

```
npm i keyboard-events-plugin
```

## 代码演示

### 基础用法

```js
import Keyboard from 'keyboard-events-plugin'

export default {
    mounted(){
        Keyboard.inWithOut(this.bounce,this.fall);
    }
    methods:{
        //弹起回调
        bounce(){

        }
        //收回回调
        fall(){

        }
    }
};
```

## API

### events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| inWithOut | 注册软盘监控 inWithOut(a,b) a=>弹起回调 b=>回落回调 | _fn_ |  |
