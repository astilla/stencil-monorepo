import { AlertPanel, MyComponent, ToggleButton } from '@nx-stencil/core-components-react';

export function App() {
  return (
    <>
      <h1>React Demo App</h1>

      <h2>&lt;My-Component&gt;</h2>
      <MyComponent first="First name" last="Last name" />

      <h2>&lt;alert-panel&gt;</h2>
      <AlertPanel message="foo"></AlertPanel>

      <h2>&lt;toggle-button&gt;</h2>
      <ToggleButton initial-label="foo" clicked-label="bar"></ToggleButton>
    </>
  );
}

export default App;
