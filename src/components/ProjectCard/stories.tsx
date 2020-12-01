import { Story, Meta } from '@storybook/react/types-6-0'
import ProjectCard, { ProjectCardProps } from '.'

export default {
  title: 'ProjectCard',
  component: ProjectCard,
  args: {
    title: 'Population Zero',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    github: 'https://git.com',
    url: 'https://site.com'
  },
  parameters: {
    backgrounds: {
      default: 'port-dark'
    }
  }
} as Meta

export const Default: Story<ProjectCardProps> = (args) => (
  <ProjectCard {...args} />
)

export const WithRibbon: Story<ProjectCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <ProjectCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: 'Mais recente',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
