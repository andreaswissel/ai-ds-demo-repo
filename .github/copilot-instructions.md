<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is an Angular component library workspace. Please generate Angular components, modules, and services using best practices for reusable libraries. Use SCSS for styles and prefix all selectors with 'cmp-'.

## Coding guidelines

### setup
- setup an Angular project with Storybook. Use the latest version and configure it to have stories files next to the components, delete the sample content from Storybook in the `/stories` folder
- check if the project uses Angular libraries or nx libraries and configure Storybook accordingly

### working
- different variations of a component should be managed through inputs on the component itself. For example, `Size = sm` in Figma should convert to a property called size on the component, that also refers to a specific class in the component styles
- try to keep the component HTML clean of any functions related to styling. Applying styles should be managed through properties, corresponding functions should reside in the functional code of the component 
- use encapsulated native HTML elements where possible to avoid re-implementing accessibility features
- make sure you are following WCAG guidelines for accessible components
- component attributes should be kebab-case (e.g. `Hierarchy = Secondary Gray` should convert to hierarchy="secondary-gray")
- make sure to include hover and focus states as well
- when composing Storybook stories, make sure to include actual samples that load the component in a proper way. For a button, you will also need to provide a template that renders content and connects component attributes.
- use standalone components only, make sure to include them in the correct way in Storybook
- for every story you create, also create an .mdx documentation file
- use design tokens wherever possible. Put these tokens in a global `design-tokens.scss` file and scaffold into further files when the file has more than 300 lines of code. Structure the files bottom-up, follow the structure of: value → primitives → semantic → component specific 
