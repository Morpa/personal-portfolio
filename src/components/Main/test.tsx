import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Main from '.'

import skillsMock from 'components/SkillCard/mock'
import projectsMock from 'components/ProjectCard/mock'

const props = {
  skills: skillsMock,
  projects: projectsMock
}

jest.mock('components/Profile', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Profile" />
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer" />
    }
  }
})

jest.mock('components/Main', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return (
        <div data-testid="Mock Main">
          <div data-testid="Mock Profile" />
          <div data-testid="Mock Footer" />
        </div>
      )
    }
  }
})

describe('<Main />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Main {...props} />)

    expect(screen.getByTestId('Mock Main')).toBeInTheDocument()

    expect(screen.getByTestId('Mock Profile')).toBeInTheDocument()

    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
