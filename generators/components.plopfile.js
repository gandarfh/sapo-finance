module.exports = function (plop) {
  plop.setGenerator('components', {
    description: 'Gerador de components',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Digite o nome do novo component:',
      },
    ],
    actions: [
      // INDEX TO COMPONENT
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/index.tsx',
        templateFile: './templates/components/component.tsx.hbs',
      },
      // STYLE
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/styled.ts',
        templateFile: './templates/components/styled.ts.hbs',
      },
      // STORYBOOK
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/stories.tsx',
        templateFile: './templates/components/stories.tsx.hbs',
      },
    ],
  })
}
