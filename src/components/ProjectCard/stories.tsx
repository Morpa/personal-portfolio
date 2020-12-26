import { Story, Meta } from '@storybook/react/types-6-0'
import ProjectCard, { ProjectCardProps } from '.'

import mockProjects from 'components/ProjectCard/mock'

export default {
  title: 'ProjectCard',
  component: ProjectCard,
  args: mockProjects
} as Meta

export const Default: Story<ProjectCardProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: 'auto' }}>
    <ProjectCard {...args} />
  </div>
)
