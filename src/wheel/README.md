# Wheel

### Install

```js
import Vue from 'vue';
import { Wheel } from 'vant';

Vue.use(Wheel);
```

## Usage

### Text

```template
<quickact-wheel :prizeList="" :successCallback="" ></quickact-wheel>
```

## API

### Methods

| Methods | Attribute | Return value | Description |
| --- | --- | --- | --- |
| Toast | `options | message` | toast instance | Show toast |
| Toast.loading | `options | message` | toast instance | Show loading toast |
| Toast.success | `options | message` | toast instance | Show success toast |
| Toast.fail | `options | message` | toast instance | Show fail toast |
| Toast.clear | `clearAll: boolean` | `void` | Close toast |
| Toast.allowMultiple | - | `void` | Allow multlple toast at the same time |
| Toast.setDefaultOptions | `type | options` | `void` | Set default options of all toasts |
| Toast.resetDefaultOptions | `type` | `void` | Reset default options of all toasts |

### Options

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `loading` `success` `fail` `html` | _string_ | `text` |
| position | Can be set to `top` `middle` `bottom` | _string_ | `middle` |
| message | Message | _string_ | `''` |
| icon | Custom icon | _string_ | - |
| iconPrefix | Icon className prefix | _string_ | `van-icon` |
| overlay | Whether to show overlay | _boolean_ | `false` |
| forbidClick | Whether to forbid click background | _boolean_ | `false` |
| closeOnClick | Whether to close after clicked | _boolean_ | `false` |
| closeOnClickOverlay | Whether to close when overlay is clicked | _boolean_ | `false` |
| loadingType | Loading icon type, can be set to `spinner` | _string_ | `circular` |
| duration | Toast duration(ms), won't disappear if value is 0 | _number_ | `2000` |
| className | Custom className | _any_ | - |
| onOpened | Callback function after opened | _Function_ | - |
| onClose | Callback function after close | _Function_ | - |
| transition | Transition, equivalent to `name` prop of [transtion](https://vuejs.org/v2/api/#transition) | _string_ | `van-fade` |
| getContainer | Return the mount node for Toast | _string \| () => Element_ | `body` |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                            | Default Value             | Description |
| ------------------------------- | ------------------------- | ----------- |
| @toast-max-width                | `70%`                     | -           |
| @toast-font-size                | `@font-size-md`           | -           |
| @toast-text-color               | `@white`                  | -           |
| @toast-loading-icon-color       | `@white`                  | -           |
| @toast-line-height              | `@line-height-md`         | -           |
| @toast-border-radius            | `@border-radius-lg`       | -           |
| @toast-background-color         | `fade(@black, 70%)`       | -           |
| @toast-icon-size                | `36px`                    | -           |
| @toast-text-min-width           | `96px`                    | -           |
| @toast-text-padding             | `@padding-xs @padding-sm` | -           |
| @toast-default-padding          | `@padding-md`             | -           |
| @toast-default-width            | `88px`                    | -           |
| @toast-default-min-height       | `88px`                    | -           |
| @toast-position-top-distance    | `20%`                     | -           |
| @toast-position-bottom-distance | `20%`                     | -           |
