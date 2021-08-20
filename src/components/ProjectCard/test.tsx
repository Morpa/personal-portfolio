import { render, screen } from 'utils/test-utils'

import ProjectCard from '.'

const props = {
  name: 'My project',
  description: 'My description',
  platform: 'web',
  stack: 'React, styled‑components',
  source: 'https://github.com/',
  demo: 'https://mysite.com/'
}

describe('<ProjectCard />', () => {
  it('should render correctly', () => {
    render(<ProjectCard {...props} />)

    expect(screen.getByText(/my project/i)).toHaveStyle({ color: '##FAFAFA' })

    expect(screen.getByText(/my description/i)).toBeInTheDocument()

    expect(screen.getByText(/React, styled‑components/i)).toBeInTheDocument()

    expect(screen.getByText(/source/i)).toHaveAttribute(
      'href',
      'https://github.com/'
    )

    expect(screen.getByText(/visit/i)).toHaveAttribute(
      'href',
      'https://mysite.com/'
    )
  })
})
