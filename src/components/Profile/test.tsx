import { render, screen } from 'utils/test-utils'

import Profile from '.'

const props = {
  visibility: {
    skills: true,
    projects: false
  }
}

describe('<Profile />', () => {
  it('should render the profile', () => {
    render(<Profile {...props} />)

    expect(
      screen.getByRole('heading', { name: /Hello, World! 👋/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: / morpa/i })).toBeInTheDocument()

    expect(screen.getByLabelText(/github/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /skills/i })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
  })

  it('should render the link active', () => {
    render(<Profile {...props} />)

    expect(screen.getByRole('link', { name: /skills/i })).toHaveStyle({
      color: '#FEC63E'
    })

    expect(screen.getByRole('link', { name: /skills/i })).toHaveAttribute(
      'href',
      '/#skills'
    )
  })

  it('should render the link when not active', () => {
    render(<Profile {...props} />)

    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute(
      'href',
      '/#projects'
    )

    expect(screen.getByRole('link', { name: /projects/i })).toHaveStyle({
      color: '#8F8F8F'
    })
  })
})
