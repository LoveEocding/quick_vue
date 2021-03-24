# img-compress-file 图片压缩

### 介绍

支持自动压缩图片质量；安装图片大小调整压缩比例；支持自定义调整压缩比例

### 安装

```
npm i img-compress-file

```

## 代码演示

### 基础用法

```js
import compressImg from 'img-compress-file';

export default {
  methods: {
    HanderImg(file) {
      compressImg(file, 1, true, function (comPressFile) {
        //得到压缩文件后的操作
        console.log(comPressFile);
      });
    },
  },
};
```

### API

| 参数       | 说明                           | 类型     | 默认值 |
| ---------- | ------------------------------ | -------- | ------ |
| 第一个参数 | 文件                           | _file_   |        |
| 第二个参数 | 0-1 代表自定义压缩质量         | _number_ | 1      |
| 第三个参数 | true:开启自动压缩 false:不开启 | _boolen_ | true   |
| 第四个参数 | 压缩后的回调函数(回参 file)    | _fn_     |        |
