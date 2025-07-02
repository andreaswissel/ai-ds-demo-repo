import type { Meta, StoryObj } from '@storybook/angular';
import { CmpDropdownComponent } from './HELLO-WORLD-cmp-dropdown.component';

const meta: Meta<CmpDropdownComponent> = {
  title: 'SCOTT Components/Dropdown',
  component: CmpDropdownComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'icon-leading', 'avatar-leading', 'dot-leading', 'search', 'tags'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'placeholder', 'focused', 'open'],
    },
    placeholder: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    hintText: {
      control: { type: 'text' },
    },
    supportingText: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    showLabel: {
      control: { type: 'boolean' },
    },
    showHintText: {
      control: { type: 'boolean' },
    },
    showSupportingText: {
      control: { type: 'boolean' },
    },
    showScrollBar: {
      control: { type: 'boolean' },
    },
    iconLeading: {
      control: { type: 'text' },
    },
    avatarSrc: {
      control: { type: 'text' },
    },
    options: {
      control: { type: 'object' },
    },
    selectedValue: {
      control: { type: 'text' },
    },
    ariaLabel: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<CmpDropdownComponent>;

const defaultOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

export const SCOTT_Default: Story = {
  args: {
    type: 'default',
    state: 'placeholder',
    placeholder: 'Select an option',
    label: 'Choose Option',
    options: defaultOptions,
  },
};

export const SCOTT_IconLeading: Story = {
  args: {
    type: 'icon-leading',
    state: 'placeholder',
    placeholder: 'Select with icon',
    label: 'Icon Leading Dropdown',
    iconLeading: '🔍',
    options: defaultOptions,
  },
};

export const SCOTT_AvatarLeading: Story = {
  args: {
    type: 'avatar-leading',
    state: 'placeholder',
    placeholder: 'Select with avatar',
    label: 'Avatar Leading Dropdown',
    avatarSrc: 'https://via.placeholder.com/24x24',
    options: defaultOptions,
  },
};

export const SCOTT_DotLeading: Story = {
  args: {
    type: 'dot-leading',
    state: 'placeholder',
    placeholder: 'Select with dot',
    label: 'Dot Leading Dropdown',
    options: defaultOptions,
  },
};

export const SCOTT_Search: Story = {
  args: {
    type: 'search',
    state: 'placeholder',
    placeholder: 'Search and select',
    label: 'Search Dropdown',
    options: defaultOptions,
  },
};

export const SCOTT_Tags: Story = {
  args: {
    type: 'tags',
    state: 'placeholder',
    placeholder: 'Select tags',
    label: 'Tags Dropdown',
    options: defaultOptions,
  },
};

export const SCOTT_Focused: Story = {
  args: {
    type: 'default',
    state: 'focused',
    placeholder: 'Focused dropdown',
    label: 'Focused State',
    options: defaultOptions,
  },
};

export const SCOTT_Open: Story = {
  args: {
    type: 'default',
    state: 'open',
    placeholder: 'Open dropdown',
    label: 'Open State',
    options: defaultOptions,
  },
};

export const SCOTT_Disabled: Story = {
  args: {
    type: 'default',
    state: 'placeholder',
    placeholder: 'Disabled dropdown',
    label: 'Disabled Dropdown',
    disabled: true,
    options: defaultOptions,
  },
};

export const SCOTT_WithHintText: Story = {
  args: {
    type: 'default',
    state: 'placeholder',
    placeholder: 'Select an option',
    label: 'Dropdown with Hint',
    hintText: 'Choose from the available options below',
    options: defaultOptions,
  },
};

export const SCOTT_WithSupportingText: Story = {
  args: {
    type: 'default',
    state: 'placeholder',
    placeholder: 'Select an option',
    label: 'Dropdown with Support',
    supportingText: 'This is supporting text to help users',
    options: defaultOptions,
  },
};

export const SCOTT_WithSelectedValue: Story = {
  args: {
    type: 'default',
    state: 'default',
    placeholder: 'Select an option',
    label: 'Pre-selected Dropdown',
    selectedValue: 'Option 2',
    options: defaultOptions,
  },
};

export const SCOTT_NoLabel: Story = {
  args: {
    type: 'default',
    state: 'placeholder',
    placeholder: 'Select an option',
    label: 'Hidden Label',
    showLabel: false,
    options: defaultOptions,
  },
};

export const SCOTT_NoScrollBar: Story = {
  args: {
    type: 'default',
    state: 'open',
    placeholder: 'Select an option',
    label: 'No Scroll Bar',
    showScrollBar: false,
    options: defaultOptions,
  },
};
