import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import ProjectCard from '.'

const props = {
  title: 'Population Zero',
  img: '/img/games/red-dead-img.jpg',
  github: 'https://git.com',
  url: 'https://site.com',
  ribbon: 'NEW',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptasipsam expedita unde, cupiditate eos temporibus veritatis minima etmaiores maxime mollitia saepe ab, incidunt quod, quo doloribusdelectus omnis ratione.',
  techs: ['React', 'Next']
}

describe('<ProjectCard />', () => {
  it('should render ProjectCard correctly', () => {
    const { container } = renderWithTheme(<ProjectCard {...props} />)

    expect(screen.getByRole('heading', { name: props.title })).toHaveStyle({
      color: '#030517'
    })

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

  it('should handle open modal', () => {
    renderWithTheme(<ProjectCard {...props} />)

    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')

    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    fireEvent.click(screen.getByRole('button', { name: /open modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('false')

    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle close modal when overlay or button is clicked', () => {
    renderWithTheme(<ProjectCard {...props} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(screen.getByRole('button', { name: /open modal/i }))

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('true')

    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when ESC button is pressed', () => {
    const { container } = renderWithTheme(<ProjectCard {...props} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(screen.getByRole('button', { name: /open modal/i }))

    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')

    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
