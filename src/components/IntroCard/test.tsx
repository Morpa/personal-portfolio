import { render, screen } from '@testing-library/react'

import IntroCard from '.'

describe('<IntroCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<IntroCard />)

    expect(screen.getByRole('heading', { name: /IntroCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
