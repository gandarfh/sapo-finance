module.exports = function (plop) {
  plop.setGenerator('pages', {
    description: 'Gerador de estrutura das pages',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Digite o nome da nova Page:',
      },
    ],
    actions: [
      // INDEX TO PAGES
      {
        type: 'add',
        path: '../pages/{{dashCase name}}/index.tsx',
        templateFile: './templates/pages/pages.tsx.hbs',
      },
      // INDEX TO SCREENS
      {
        type: 'add',
        path: '../src/screens/{{dashCase name}}/index.tsx',
        templateFile: './templates/pages/screens.tsx.hbs',
      },
      // STYLE
      {
        type: 'add',
        path: '../src/screens/{{dashCase name}}/styled.ts',
        templateFile: './templates/pages/styled.ts.hbs',
      },
      // TRANSLATION PT-BR
      {
        type: 'add',
        path: '../public/locales/pt-BR/{{dashCase name}}.json',
        templateFile: './templates/pages/pt-br.json.hbs',
      },
      // TRANSLATION EN
      {
        type: 'add',
        path: '../public/locales/en/{{dashCase name}}.json',
        templateFile: './templates/pages/en.json.hbs',
      },
    ],
  })
}
