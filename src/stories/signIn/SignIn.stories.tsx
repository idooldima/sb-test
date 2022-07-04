import SignInForm from "../../pages/SignIn/SignInForm";
import { ComponentStory, } from '@storybook/react';
export default {
    argTypes: {
    },
    title: 'SignInForm',
    component: SignInForm,
};

const Template: ComponentStory<typeof SignInForm> = (arg) => <SignInForm {...arg} />;

export const Default = Template.bind({});
Default.args = {};
export const WithInputErrors = Template.bind({});
WithInputErrors.args = {
    initialEmail: 'incorect Email',
    initialPassword: '123'
};