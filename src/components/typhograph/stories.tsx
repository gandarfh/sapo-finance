import { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Typography } from './index'

export default {
  title: 'Typhograph Component',
  component: Typography,
} as Meta

const Template: Story<ComponentProps<typeof Typography>> = (args) => (
  <Typography {...args} />
)

export const Basic = Template.bind({})
Basic.args = {}
