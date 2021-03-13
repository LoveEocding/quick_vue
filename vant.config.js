module.exports = {
  name: 'QuickAct_Vue',
  build: {
    skipInstall: ['lazyload'],
    site: {
      publicPath: process.env.PUBLIC_PATH || '',
    },
    vetur: {
      tagPrefix: 'quickact_',
    },
  },
  site: {
    defaultLang: 'en-US',
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
        logo: 'https://habaocdn.fuhuibao.club/flb/common/1609203914529quickact_vue.png'
      }
    },
    locales: {
      'zh-CN': {
        title: 'QuickAct_Vue',
        description: '活动 Vue 组件库',
        logo: 'https://habaocdn.fuhuibao.club/flb/common/1609203914529quickact_vue.png',
        langLabel: '中文',
        links: [{
          logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
          url: 'https://github.com/LoveEocding/QuickAct_Vue',
        }, ],
        searchConfig: {
          apiKey: '90067aecdaa2c85220e2783cd305caac',
          indexName: 'vant',
          placeholder: '搜索文档...',
          transformData(hits) {
            if (location.hostname === 'vant-contrib.gitee.io') {
              hits.forEach((hit) => {
                if (hit.url) {
                  hit.url = hit.url.replace(
                    'youzan.github.io',
                    'vant-contrib.gitee.io'
                  );
                }
              });
            }
          },
        },
        nav: [{
            title: '开发指南',
            items: [{
                path: 'home',
                title: '介绍',
              },
              {
                path: 'quickstart',
                title: '快速上手',
              },
              {
                path: 'advanced-usage',
                title: '进阶用法',
              },
              {
                path: 'changelog',
                title: '更新日志',
              },
            ],
          },
          {
            title: '活动组件',
            items: [{
                path: 'wheel',
                title: '大转盘',
              },
              {
                path: 'cell',
                title: '老虎机',
              },
              {
                path: 'icon',
                title: '弹幕滚动',
              },
            ],
          },
          {
            title: '交互组件',
            items: [{
                path: 'button',
                title: '上下翻页',
              },
              {
                path: 'cell',
                title: '左右翻页',
              },
            ],
          },


        ],
      },
      'en-US': {
        title: 'quickact_vue',
        description: 'Mobile UI Components built on Vue',
        logo: 'https://habaocdn.fuhuibao.club/flb/common/1609203914529quickact_vue.png"',
        langLabel: 'En',
        links: [{
          logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
          url: 'https://github.com/LoveEocding/QuickAct_Vue',
        }, ],
        searchConfig: {
          apiKey: '90067aecdaa2c85220e2783cd305caac',
          indexName: 'vant',
          placeholder: 'Search...',
        },
        nav: [{
          title: 'Essentials',
          items: []
        }],
      },
    },
  },
};
