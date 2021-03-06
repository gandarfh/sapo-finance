module.exports = function (plop) {
  plop.setGenerator('pages', {
    description: 'Gerador de estrutura de pages',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Digite o nome da nova Page:',
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
        path: '../../../public/locales/pt-BR/{{dashCase name}}.json',
        templateFile: 'pt-br.json.hbs',
      },
      {
        type: 'add',
        path: '../../../public/locales/en/{{dashCase name}}.json',
        templateFile: 'en.json.hbs',
      },
    ],
  })
}
