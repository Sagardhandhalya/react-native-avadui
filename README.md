# react-native-avadui

A lightweight React Native UI component library.

## Installation

```sh
npm install react-native-avadui
```

## Example 

```sh
cd example
yarn install 
yarn ios/android
```
Please run this to see story book of all components. 


<img width="30%" alt="SCR-20250509-qdpl" src="https://github.com/user-attachments/assets/a7aa5add-cec6-43c2-85d8-b964a6efd942" />
&nbsp;&nbsp;
<img width="30%" alt="SCR-20250509-qdim" src="https://github.com/user-attachments/assets/4af6f43f-6ea6-4d1f-a6c0-569b7ed9f634" />


## Components

### Button

A versatile button component with multiple variants, sizes, and states.

```jsx
import { Button } from 'react-native-avadui';

// Basic usage
<Button 
  label="Click me" 
  onPress={() => console.log('Pressed')} 
/>

// Different variants
<Button 
  label="Outline Button" 
  variant="outline" 
  onPress={() => {}} 
/>

<Button 
  label="Text Button" 
  variant="text" 
  onPress={() => {}} 
/>

// Different sizes
<Button 
  label="Small Button" 
  size="small" 
  onPress={() => {}} 
/>

<Button 
  label="Full Width" 
  size="full" 
  onPress={() => {}} 
/>

// With icon
<Button 
  label="With Icon" 
  renderIcon={() => <Icon name="star" />}
  iconDirection="start"
  onPress={() => {}} 
/>

// With notification count
<Button 
  label="Notifications" 
  count={3}
  onPress={() => {}} 
/>

// Loading state
<Button 
  label="Loading..." 
  loading={true}
  onPress={() => {}} 
/>

// Disabled state
<Button 
  label="Disabled" 
  disabled={true}
  onPress={() => {}} 
/>
```

### Text

A flexible text component with various typography styles.

```jsx
import { Text } from 'react-native-avadui';

// Basic usage
<Text>Hello World</Text>

// With variant
<Text variant="title4Bold">Bold Title</Text>

// With custom styling
<Text 
  color="primary"
  center={true}
  uppercase={true}
>
  Centered Uppercase Text
</Text>
```

### Tag

A tag component for displaying labels or categories.

```jsx
import { Tag } from 'react-native-avadui';

// Basic usage
<Tag label="New" />

// With custom colors
<Tag 
  label="Featured" 
  bgColor="purple"
  textColor="white"
/>

// With custom padding
<Tag 
  label="Custom Padding" 
  ph={16}
  pv={8}
/>
```

### Box

A flexible container component for layout.

```jsx
import { Box } from 'react-native-avadui';

// Basic usage
<Box>
  <Text>Content</Text>
</Box>

// With custom styling
<Box 
  flex={1}
  bg="white"
  padding={16}
>
  <Text>Styled Box</Text>
</Box>
```

## Props

For detailed prop documentation, please refer to the TypeScript definitions in the source code.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
