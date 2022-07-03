import { Button } from './Button';
import { ButtonProps } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  argTypes: {
    children: {
      name: 'label',
      type: 'string',
    },
  },
  title: 'Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = (arg) => <Button {...arg} />;

export const Default = Template.bind({});
Default.args = {};
export const SignInBtn = Template.bind({});
SignInBtn.args = {
  fullWidth: true,
  variant: 'contained',
};

export const GoogleBtn = Template.bind({});
GoogleBtn.args = {
  variant: 'outlined',
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  fullWidth: true,
};
