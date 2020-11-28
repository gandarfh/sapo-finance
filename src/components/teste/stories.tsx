// YourComponent.stories.tsx

import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { TesteComponent } from './index'

export default {
  title: 'Teste Component',
  component: TesteComponent,
} as Meta

const Template: Story<ComponentProps<typeof TesteComponent>> = (args) => (
  <TesteComponent {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  title: 'Texto de teste mudado via agrs',
}
