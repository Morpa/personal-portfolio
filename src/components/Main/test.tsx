import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Main from '.'

jest.mock('components/Main', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return (
        <div data-testid="Mock Main">
          <div data-testid="Mock IntroCard"></div>
        </div>
      )
    }
  }
})

describe('<Main />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Main />)

    expect(screen.getByTestId('Mock Main')).toBeInTheDocument()
    expect(screen.getByTestId('Mock IntroCard')).toBeInTheDocument()
  })
})
