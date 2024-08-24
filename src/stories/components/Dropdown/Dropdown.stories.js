import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const Default = () => (
  <Dropdown
    options={['Option 1', 'Option 2', 'Option 3']}
    onSelect={(option) => console.log('Selected:', option)}
  />
);
