import React, { useState } from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <Input {...args} value={value} onChange={setValue} />;
};

export const TextInput = Template.bind({});
TextInput.args = {
  type: 'text',
  placeholder: 'Enter text',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: 'password',
  placeholder: 'Enter password',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  type: 'email',
  placeholder: 'Enter email',
};
