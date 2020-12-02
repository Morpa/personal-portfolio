import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import IntroCard from '.'

describe('<IntroCard />', () => {
  it('should render the correctly', () => {
    renderWithTheme(<IntroCard />)

    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/github/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/morpa/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /front end developer/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute(
      'href',
      '/projects'
    )
  })
})
