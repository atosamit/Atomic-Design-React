import React from 'react';
import PageHeader from './PageHeader';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
};

const Template = (args) => <PageHeader {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  title: 'My Application',
  menuItems: [
    { label: 'Home', link: '#' },
    { label: 'About', link: '#' },
    { label: 'Services', link: '#' },
    { label: 'Contact', link: '#' },
  ],
};
