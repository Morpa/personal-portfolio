import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer correctly', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(screen.getByText(/Made with by Morpa/i)).toBeInTheDocument()

    expect(screen.getByText(/Made with by Morpa/i)).toHaveStyle({
      color: '#FEC63E'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
