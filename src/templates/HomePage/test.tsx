import { render, screen } from '@testing-library/react'

import HomePage from '.'

describe('<HomePage />', () => {
  it('should render the heading', () => {
    const { container } = render(<HomePage />)

    expect(screen.getByRole('heading', { name: /HomePage/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
