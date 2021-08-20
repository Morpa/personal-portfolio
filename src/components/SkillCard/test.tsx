import { render, screen } from 'utils/test-utils'

import Skills from '.'

const props = {
  name: 'TypeScript',
  image: 'typescript'
}

describe('<Skills />', () => {
  it('should render image correctly', () => {
    render(<Skills {...props} />)

    expect(screen.getByText(/typescript/i)).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: `${props.name} logo` })
    ).toHaveAttribute('src', `/img/tech/${props.image}.svg`)
  })
})
