module.exports = {
  name: 'QuickAct_Vue',
  build: {
    skipInstall: ['lazyload', ''],
    site: {
      publicPath: process.env.PUBLIC_PATH || '',
    },
    vetur: {
      tagPrefix: 'quick_',
    },
  },
  site: {
    defaultLang: 'zh-CN',
    // versions: [{
    //   label: '1.0',
    //   link: '/vant/1.x/'
    // }, ],
    versions: [],
    baiduAnalytics: {
      seed: '',
    },
    htmlPluginOptions: {
      meta: {
        'docsearch:version': '2.x',
      },
      options: {
        logo:
          'https://habaocdn.fuhuibao.club/flb/common/1609203914529quickact_vue.png',
      },
    },
    locales: {
      'zh-CN': {
        title: 'QuickAct_Vue',
        description: '活动 Vue 组件库',
        logo:
          'https://habaocdn.fuhuibao.club/flb/common/1609203914529quickact_vue.png',
        langLabel: '中文',
        links: [
          {
            logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: 'https://github.com/LoveEocding/QuickAct_Vue',
          },
        ],
        searchConfig: null,
        nav: [
          {
            title: '开发指南',
            items: [
              {
                path: 'home',
                title: '介绍',
              },
              {
                path: 'quickstart',
                title: '快速上手',
              },
              // {
              //   path: 'advanced-usage',
              //   title: '进阶用法',
              // },
              // {
              //   path: 'changelog',
              //   title: '更新日志',
              // },
            ],
          },
          {
            title: '图表',
            items: [
              {
                path: 'bar-chart',
                title: '柱状图',
              },
              {
                path: 'circle-chart',
                title: '环形进度图',
              },
              {
                path: 'circle-assemble-chart',
                title: '环形构成图',
              },
            ],
          },
          {
            title: '活动组件',
            items: [
              {
                path: 'wheel',
                title: '大转盘',
              },
            ],
          },
          {
            title: 'npm插件',
            items: [
              {
                path: 'keyboard-events',
                title: '软盘监听',
              },
              {
                path: 'pic-compress',
                title: '图片压缩',
              },
              {
                path: 'file-upload',
                title: 'webpack插件/上传cdn',
              },
            ],
          },
          {
            title: '展示组件',
            items: [
              {
                path: 'count-down',
                title: '倒计时',
              },
            ],
          },
        ],
      },
      'en-US': {},
    },
  },
};
