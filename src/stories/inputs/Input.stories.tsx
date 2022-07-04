import { TextField } from '@mui/material';
import { ComponentStory } from '@storybook/react';

export default {
  argTypes: {
    children: {
      name: 'label',
      type: 'string',
    },
  },
  title: 'Input',
  component: TextField,
};

const Template: ComponentStory<typeof TextField> = (arg) => <TextField {...arg} />;

export const TextFieldDefault = Template.bind({});
TextFieldDefault.args = {
  fullWidth: true,
};
