import { render, screen } from 'utils/test-utils'
import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer correctly', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText(/Made with by Morpa/i)).toBeInTheDocument()

    expect(screen.getByText(/Made with by Morpa/i)).toHaveStyle({
      color: '#FEC63E'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
