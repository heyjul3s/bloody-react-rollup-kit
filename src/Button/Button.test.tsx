import * as React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('it renders', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment).toMatchSnapshot();
  });
});
