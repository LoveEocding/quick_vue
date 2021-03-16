# 快速上手

### 介绍

通过本章节你可以了解到 quick_vue 的安装方法和基本使用姿势。

## 安装

### 通过 npm 安装

在现有项目中使用 quick_vue 时，可以通过 `npm` 或 `yarn` 进行安装：

```bash
# Vue 2 项目，安装 Vant 2.x 版本：
npm i quick_vue -S

```

## 引入组件

### 方式一. 自动按需引入组件 (推荐)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。

```bash
# 安装插件
npm i babel-plugin-import -D
```

```js
// 在.babelrc 中添加配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "quick",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'quick',
      libraryDirectory: 'es',
      style: true
    }, 'quick']
  ]
};
```

```js
// 接着你可以在代码中直接引入 Vant 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button } from 'quick_vue';
```

> Tips: 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入。

### 方式二. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件。

```js
import Button from 'quick_vue/lib/button';
import 'quick_vue/lib/button/style';
```

### 方式三. 导入所有组件

Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。

```js
import Vue from 'vue';
import Quick from 'quick_vue';
import 'quick_vue/lib/index.css';

Vue.use(Quick);
```

> Tips: 配置按需引入后，将不允许直接导入所有组件。

## 常见问题

### 在 HTML 中无法正确渲染组件？

在 HTML 中使用 Vant 组件时，你可能会碰到部分示例代码无法正确渲染的情况，比如下面的用法：

```html
<quick-cell-group>
  <quick-cell title="单元格" value="内容" />
  <quick-cell title="单元格" value="内容" />
</quick-cell-group>
```

这是因为 HTML 并不支持自闭合的自定义元素，也就是说 `<van-cell />` 这样的语法是不被识别的，使用完整的闭合标签可以避免这个问题：

```html
<quick-cell-group>
  <quick-cell title="单元格" value="内容"></van-cell>
  <quick-cell title="单元格" value="内容"></van-cell>
</quick-cell-group>
```

在单文件组件、字符串模板和 JSX 中可以使用自闭合的自定义元素，因此不会出现这个问题。
