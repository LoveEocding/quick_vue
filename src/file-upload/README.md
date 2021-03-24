# quick_file_upload

webpack 打包插件，用户文件打包完成后，上传服务器或者 cdn。携带路径，可以用于服务器分层存储。

### install

```
npm i -D quick_file_upload or yarn add quick_file_upload --dev
```

### useage

```
const FileToCdn = require('quick_file_upload');

 plugins: [
            new FileToCdn({
                url: 'http://192.200.39.131:8082/cdn/file/uploadFile',
                dirName: 'dist', proxy: 'http://127.0.0.1:8888', filesKey: 'fileVOwwwwS',
                extral: {
                    appkey: 'vote1',
                    version: '1.0.1'
                }
            })
        ]

```

### props

| 参数     | 说明                          | 类型     | 默认值 |
| -------- | ----------------------------- | -------- | ------ |
| url      | 上传接口 必传                 | _string_ |        |
| dirName  | 上传文件夹名称                | _string_ | 'dist' |
| proxy    | 代理可以用于抓包看请求        | _string_ |        |
| filesKey | 数组 file 的 name 值。        | _string_ | files  |
| extral   | 额外的参数 用于其他的业务逻辑 | _object_ | {}     |
