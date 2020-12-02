import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Projects from '.'

const projects = [
  {
    title: 'Population Zero',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    github: 'https://git.com',
    url: 'https://site.com',
    ribbon: 'NEW'
  },
  {
    title: 'Beer Explorer',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    github: 'https://git.com',
    url: 'https://site.com'
  }
]

describe('<Projects />', () => {
  it('should render the correctly', () => {
    renderWithTheme(<Projects projects={projects} />)

    expect(
      screen.getByRole('heading', { name: /projects/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/back/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Population Zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Beer Explorer/i })
    ).toBeInTheDocument()
  })
})
