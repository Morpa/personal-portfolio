import { Story, Meta } from '@storybook/react/types-6-0'
import IntroCard from '.'

export default {
  title: 'IntroCard',
  component: IntroCard
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <IntroCard />
  </div>
)
