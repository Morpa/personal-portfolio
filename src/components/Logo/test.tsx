import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a black label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/morpa/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white label when color is passed', () => {
    renderWithTheme(<Logo color="white" />)
    expect(screen.getByLabelText(/morpa/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a yellow label when color is passed', () => {
    renderWithTheme(<Logo color="yellow" />)
    expect(screen.getByLabelText(/morpa/i).parentElement).toHaveStyle({
      color: '#FEC63E'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/morpa/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a normal logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/morpa/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
})
