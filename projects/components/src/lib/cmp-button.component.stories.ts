import type { Meta, StoryObj } from '@storybook/angular';
import { CmpButtonComponent } from './cmp-button.component';

type ButtonStory = StoryObj<CmpButtonComponent>;

const meta: Meta<CmpButtonComponent> = {
  title: 'Components/Button',
  component: CmpButtonComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    hierarchy: {
      control: { type: 'select' },
      options: ['primary', 'secondary-gray', 'secondary-color', 'tertiary-gray', 'tertiary-color', 'link-gray', 'link-color'],
    },
    icon: {
      control: { type: 'select' },
      options: ['default', 'dot-leading', 'only'],
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
  },
  args: {
    size: 'md',
    hierarchy: 'primary',
    icon: 'default',
    disabled: false,
    type: 'button',
  },
};

export default meta;

// Default button
export const Default: ButtonStory = {
  render: (args) => ({
    props: args,
    template: `<cmp-button 
      [size]="size" 
      [hierarchy]="hierarchy" 
      [icon]="icon" 
      [disabled]="disabled" 
      [type]="type"
    >
      Button
    </cmp-button>`,
  }),
};

// Primary variants
export const Primary: ButtonStory = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <cmp-button hierarchy="primary" size="sm">Button</cmp-button>
        <cmp-button hierarchy="primary" size="md">Button</cmp-button>  
        <cmp-button hierarchy="primary" size="lg">Button</cmp-button>
        <cmp-button hierarchy="primary" size="xl">Button</cmp-button>
        <cmp-button hierarchy="primary" size="2xl">Button</cmp-button>
      </div>
    `,
  }),
};

// Secondary gray variants
export const SecondaryGray: ButtonStory = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <cmp-button hierarchy="secondary-gray" size="sm">Button</cmp-button>
        <cmp-button hierarchy="secondary-gray" size="md">Button</cmp-button>  
        <cmp-button hierarchy="secondary-gray" size="lg">Button</cmp-button>
        <cmp-button hierarchy="secondary-gray" size="xl">Button</cmp-button>
        <cmp-button hierarchy="secondary-gray" size="2xl">Button</cmp-button>
      </div>
    `,
  }),
};

// Secondary color variants
export const SecondaryColor: ButtonStory = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <cmp-button hierarchy="secondary-color" size="sm">Button</cmp-button>
        <cmp-button hierarchy="secondary-color" size="md">Button</cmp-button>  
        <cmp-button hierarchy="secondary-color" size="lg">Button</cmp-button>
        <cmp-button hierarchy="secondary-color" size="xl">Button</cmp-button>
        <cmp-button hierarchy="secondary-color" size="2xl">Button</cmp-button>
      </div>
    `,
  }),
};

// Tertiary variants
export const Tertiary: ButtonStory = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 16px;">
        <cmp-button hierarchy="tertiary-gray" size="sm">Button</cmp-button>
        <cmp-button hierarchy="tertiary-gray" size="md">Button</cmp-button>  
        <cmp-button hierarchy="tertiary-gray" size="lg">Button</cmp-button>
        <cmp-button hierarchy="tertiary-gray" size="xl">Button</cmp-button>
        <cmp-button hierarchy="tertiary-gray" size="2xl">Button</cmp-button>
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <cmp-button hierarchy="tertiary-color" size="sm">Button</cmp-button>
        <cmp-button hierarchy="tertiary-color" size="md">Button</cmp-button>  
        <cmp-button hierarchy="tertiary-color" size="lg">Button</cmp-button>
        <cmp-button hierarchy="tertiary-color" size="xl">Button</cmp-button>
        <cmp-button hierarchy="tertiary-color" size="2xl">Button</cmp-button>
      </div>
    `,
  }),
};

// Link variants
export const Links: ButtonStory = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 16px;">
        <cmp-button hierarchy="link-gray" size="sm">Button</cmp-button>
        <cmp-button hierarchy="link-gray" size="md">Button</cmp-button>  
        <cmp-button hierarchy="link-gray" size="lg">Button</cmp-button>
        <cmp-button hierarchy="link-gray" size="xl">Button</cmp-button>
        <cmp-button hierarchy="link-gray" size="2xl">Button</cmp-button>
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <cmp-button hierarchy="link-color" size="sm">Button</cmp-button>
        <cmp-button hierarchy="link-color" size="md">Button</cmp-button>  
        <cmp-button hierarchy="link-color" size="lg">Button</cmp-button>
        <cmp-button hierarchy="link-color" size="xl">Button</cmp-button>
        <cmp-button hierarchy="link-color" size="2xl">Button</cmp-button>
      </div>
    `,
  }),
};

// With icons
export const WithIcons: ButtonStory = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 16px;">
        <cmp-button hierarchy="primary" icon="dot-leading">Button</cmp-button>
        <cmp-button hierarchy="secondary-gray" icon="dot-leading">Button</cmp-button>
        <cmp-button hierarchy="secondary-color" icon="dot-leading">Button</cmp-button>
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <cmp-button hierarchy="primary" icon="only" size="sm" ariaLabel="Primary icon button"></cmp-button>
        <cmp-button hierarchy="secondary-gray" icon="only" size="md" ariaLabel="Secondary icon button"></cmp-button>
        <cmp-button hierarchy="tertiary-color" icon="only" size="lg" ariaLabel="Tertiary icon button"></cmp-button>
      </div>
    `,
  }),
};

// Disabled states
export const DisabledStates: ButtonStory = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 16px;">
        <cmp-button hierarchy="primary" [disabled]="true">Primary</cmp-button>
        <cmp-button hierarchy="secondary-gray" [disabled]="true">Secondary Gray</cmp-button>
        <cmp-button hierarchy="secondary-color" [disabled]="true">Secondary Color</cmp-button>
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 16px;">
        <cmp-button hierarchy="tertiary-gray" [disabled]="true">Tertiary Gray</cmp-button>
        <cmp-button hierarchy="tertiary-color" [disabled]="true">Tertiary Color</cmp-button>
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <cmp-button hierarchy="link-gray" [disabled]="true">Link Gray</cmp-button>
        <cmp-button hierarchy="link-color" [disabled]="true">Link Color</cmp-button>
      </div>
    `,
  }),
};

// All sizes comparison
export const AllSizes: ButtonStory = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <cmp-button size="sm">Small</cmp-button>
        <cmp-button size="md">Medium</cmp-button>
        <cmp-button size="lg">Large</cmp-button>
        <cmp-button size="xl">X-Large</cmp-button>
        <cmp-button size="2xl">2X-Large</cmp-button>
      </div>
    `,
  }),
};

// Interactive example
export const Interactive: ButtonStory = {
  render: (args) => ({
    props: {
      ...args,
      onClick: (event: Event) => {
        console.log('Button clicked!', event);
        alert('Button clicked! Check console for event details.');
      },
    },
    template: `<cmp-button 
      [size]="size" 
      [hierarchy]="hierarchy" 
      [icon]="icon" 
      [disabled]="disabled" 
      [type]="type"
      (buttonClick)="onClick($event)"
    >
      Click Me!
    </cmp-button>`,
  }),
};