import React from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

export const Default = () => (
  <Tooltip text="This is a tooltip">
    <button>Hover over me</button>
  </Tooltip>
);
