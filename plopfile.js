module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'generator a component demo',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '组件名称',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{name}}/index.vue',
        templateFile: './plop-templates/vue.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/index.scss',
      },
      {
        type: 'add',
        path: 'src/{{name}}/README.md',
        templateFile: './plop-templates/readme.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/README.zh-CN.md',
        templateFile: './plop-templates/readme.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/demo/index.vue',
        templateFile: './plop-templates/demovue.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/test/index.spec.js',
        templateFile: './plop-templates/test_index.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/test/demo.spec.js',
        templateFile: './plop-templates/test_demo.hbs',
      },
    ],
  });
};
