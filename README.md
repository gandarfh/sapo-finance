### Structure

The structure of are in the `src`:

* **components:** This folder will be have in you structure:
* **pages:** This folder will have our pages.
  * The folder page will be de path name in routes web page and your structure like the components
* **styles:** Have our global styles and themes for the styled components

## Generate with plop

#### To Create a new component:

```javascript
yarn generate:component 'name of the component'
# or
npm run generate:component 'name of the component'
```

#### To Create a new page:

```javascript
yarn generate:page 'name of the page'
# or
npm run generate:page 'name of the page'
```

This command will create one structure like:

* `(component/page)/name-of-(component/page)/index.tsx`
* `(component/page)/name-of-(component/page)/styled.ts`
* `(component/page)/name-of-(component/page)/stories.tsx`
* `(component/page)/name-of-(component/page)/test.tsx`

## How we works

#### To run our scripts

* To start the next

```javascript
yarn dev
# or
npm run dev
```

* To run the tests

```javascript
yarn test
# or
npm run test
```

* To run the esLint

```javascript
yarn lint
# or
npm run lint
```

* To open the storybook locally

```javascript
yarn storybook
# or
npm run storybook
```

### Dependencies

* next.js
* styled-components
* testing-library
* jest
* typescript

## Patterns

### Archive name

#### The nomenclature of archive has some patterns:

* Every use just lower case words
* Use "-" to substitute spaces. Ex: "credit card" \(the name of file 'credit-card'\)
* Create components and pages only with plop script
* Icons must be finished with .icon
* Contexts must be finished with .context
* To use styled components some things are so important. Your global style and theme configurations are in src/styles. There are some patterns and components to use in the project
* To texts there are Title and Text components. They are found in src/components/typograph
* All styled components must be in the archive with name styled.js
* They need imported like `import * as S from './styled'` to diff our components to your styled component

#### Multi language:

* The project use the library I18n and react-I18next to make the translations
* The archives are the path /public/locales//.json
* It's a best practice has 1 archive by page

#### Paths:

* We have paths to components, pages, styles, requests, contexts, hooks
* To import use the prefix `#`

  > exemple: `import Home from '#pages/home'`

