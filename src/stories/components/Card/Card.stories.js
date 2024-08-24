import React from 'react';
import Card from './Card';
import CardWithFooter from './CardWithFooter';
import ClickableCard from './ClickableCard';
import ColoredCard from './ColoredCard';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;
const TemplateWithFooter = (args) => <CardWithFooter {...args} />;
const TemplateClickable = (args) => <ClickableCard {...args} />;
const TemplateColored = (args) => <ColoredCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is a description of the card content. It can be a few sentences long.',
  imageUrl: 'https://via.placeholder.com/300x200',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: 'Card Title',
  content: 'This is a description of the card content. It can be a few sentences long.',
};

export const WithFooter = TemplateWithFooter.bind({});
WithFooter.args = {
  title: 'Card Title',
  content: 'This is a description of the card content. It can be a few sentences long.',
  imageUrl: 'https://via.placeholder.com/300x200',
  footer: <button>Click Me</button>,
};

export const Clickable = TemplateClickable.bind({});
Clickable.args = {
  title: 'Card Title',
  content: 'This is a description of the card content. It can be a few sentences long.',
  imageUrl: 'https://via.placeholder.com/300x200',
  onClick: () => alert('Card clicked!'),
};

export const Colored = TemplateColored.bind({});
Colored.args = {
  title: 'Card Title',
  content: 'This is a description of the card content. It can be a few sentences long.',
  imageUrl: 'https://via.placeholder.com/300x200',
  backgroundColor: '#ffefd5',
};
