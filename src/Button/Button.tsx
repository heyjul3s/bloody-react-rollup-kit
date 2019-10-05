import * as React from 'react';
import { ButtonProps } from './types';

export const Button: React.FunctionComponent<ButtonProps> = () => {
  const [count, setCount] = React.useState(0);

  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </React.Fragment>
  );
};
