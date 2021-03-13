import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Button Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button Text',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button Text',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Button Text',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button Text',
};
