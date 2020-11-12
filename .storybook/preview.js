// .storybook/preview.js

import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme-styled'
import GlobalStyles from '../src/styles/global'

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider]
