import { Input } from './Input';
import { ComponentStory } from '@storybook/react';

export default {
  argTypes: {
    children: {
      name: 'label',
      type: 'string',
    },
  },
  title: 'Input',
  component: Input,
};

const Template: ComponentStory<typeof Input> = (arg) => <Input {...arg} />;

export const InputDefault = Template.bind({});
InputDefault.args = {
  fullWidth: true,
};
