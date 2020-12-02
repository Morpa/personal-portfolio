import { Story, Meta } from '@storybook/react/types-6-0'
import Projects, { ProjectsProps } from '.'

import projectsMock from './mock'

export default {
  title: 'Projects',
  component: Projects,
  args: {
    projects: projectsMock
  },
  argTypes: {
    projects: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'port-dark'
    }
  }
} as Meta

export const Default: Story<ProjectsProps> = (args) => <Projects {...args} />
