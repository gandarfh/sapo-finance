module.exports = function (plop) {
  // controller generator
  plop.setGenerator('components', {
    description: 'Gerador de estrutura de components',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do component:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../../src/components/{{dashCase name}}/index.tsx',
        templateFile: 'index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../../src/components/{{dashCase name}}/styled.ts',
        templateFile: 'styled.ts.hbs',
      },
      {
        type: 'add',
        path: '../../../src/components/{{dashCase name}}/stories.tsx',
        templateFile: 'stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../../src/components/{{dashCase name}}/test.tsx',
        templateFile: 'test.tsx.hbs',
      },
    ],
  })
}
