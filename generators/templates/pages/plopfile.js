module.exports = function (plop) {
  plop.setGenerator('pages', {
    description: 'Gerador de estrutura de pages',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome da sua page:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../../src/pages/{{dashCase name}}/index.tsx',
        templateFile: 'index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../../src/pages/{{dashCase name}}/styled.ts',
        templateFile: 'styled.ts.hbs',
      },
      {
        type: 'add',
        path: '../../../src/pages/{{dashCase name}}/stories.tsx',
        templateFile: 'stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../../src/pages/{{dashCase name}}/test.tsx',
        templateFile: 'test.tsx.hbs',
      },
    ],
  })
}
