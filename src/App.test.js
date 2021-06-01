import { render } from '@testing-library/react';
import { MainHeading } from './pages';
import React from "react";

test('renders learn react link', () => {
  const { getByText } = render(<MainHeading />);
  const h1 = getByText(/Sairam Kotari/i);
  expect(h1).toHaveTextContent("Sairam Kotari");
});
