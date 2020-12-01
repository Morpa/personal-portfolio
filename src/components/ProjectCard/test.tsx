import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import ProjectCard from '.'

const props = {
  title: 'Population Zero',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  github: 'https://git.com',
  url: 'https://site.com'
}

describe('<ProjectCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<ProjectCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByText(/github/i)).toBeInTheDocument()

    expect(screen.getByText(/live/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without live button', () => {
    renderWithTheme(<ProjectCard {...props} url="" />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByText(/github/i)).toBeInTheDocument()

    expect(screen.queryByText(/live/i)).not.toBeInTheDocument()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <ProjectCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
