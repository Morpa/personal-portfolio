import { Story, Meta } from '@storybook/react/types-6-0'
import { Portfolio } from '@styled-icons/zondicons/Portfolio'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Portfolio'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Portfolio',
  icon: <Portfolio />
}

export const asLink: Story = (args) => <Button {...args} />
asLink.args = {
  size: 'large',
  children: 'Portfolio',
  as: 'a',
  href: 'link'
}
