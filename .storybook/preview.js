import { withNextRouter } from 'storybook-addon-next-router'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

addDecorator(withNextRouter())

export const parameters = {
  backgrounds: {
    default: 'port-dark',
    values: [
      {
        name: 'port-light',
        value: theme.colors.white
      },
      {
        name: 'port-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles removeBg />
        <Story />
      </ThemeProvider>
    </>
  )
]
