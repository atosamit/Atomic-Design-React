import React from 'react';
import ToggleSwitch from './ToggleSwitch';

export default {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
};

export const Default = () => (
  <ToggleSwitch
    label="Toggle Switch"
    initialValue={false}
    onChange={(value) => console.log('Value changed:', value)}
  />
);

export const PrimaryColor = () => (
  <ToggleSwitch
    label="Primary Toggle Switch"
    initialValue={true}
    onChange={(value) => console.log('Value changed:', value)}
    color="primary"
  />
);

export const SuccessColor = () => (
  <ToggleSwitch
    label="Success Toggle Switch"
    initialValue={true}
    onChange={(value) => console.log('Value changed:', value)}
    color="success"
  />
);

export const DangerColor = () => (
  <ToggleSwitch
    label="Danger Toggle Switch"
    initialValue={true}
    onChange={(value) => console.log('Value changed:', value)}
    color="danger"
  />
);
